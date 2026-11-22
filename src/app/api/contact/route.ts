import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const projectTypeLabels: Record<string, string> = {
  "ai-ads": "AI Video Ads",
  "brand-film": "Brand Film",
  commercial: "Commercial/Explainer",
  partnership: "Monthly Content Partnership",
  "not-sure": "Not Sure Yet",
};

const budgetLabels: Record<string, string> = {
  "50-100": "R50k-100k",
  "100-250": "R100k-250k",
  "250-500": "R250k-500k",
  "500+": "R500k+",
  discuss: "Let's Discuss",
};

const timelineLabels: Record<string, string> = {
  "1-2": "1-2 months",
  "3-4": "3-4 months",
  flexible: "Flexible",
  asap: "ASAP",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, company, projectType, budget, timeline, referral } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, message" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);
    const safeCompany = company ? escapeHtml(company) : "";
    const safeProjectType = projectType ? (projectTypeLabels[projectType] || escapeHtml(projectType)) : "";
    const safeBudget = budget ? (budgetLabels[budget] || escapeHtml(budget)) : "";
    const safeTimeline = timeline ? (timelineLabels[timeline] || escapeHtml(timeline)) : "";
    const safeReferral = referral ? escapeHtml(referral) : "";

    const subject = `New Inquiry from ${safeName}${safeCompany ? ` (${safeCompany})` : ""}`;

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${safeEmail}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${safePhone}</td>
        </tr>
        ${safeCompany ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${safeCompany}</td>
        </tr>` : ""}
        ${safeProjectType ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Project Type</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${safeProjectType}</td>
        </tr>` : ""}
        ${safeBudget ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Budget</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${safeBudget}</td>
        </tr>` : ""}
        ${safeTimeline ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Timeline</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${safeTimeline}</td>
        </tr>` : ""}
        ${safeReferral ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Referral Source</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${safeReferral}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${safeMessage.replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
    `;

    // Lazy init: Resend throws on a missing key, which breaks `next build` if done at module load.
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "Imagenus Website <onboarding@resend.dev>",
      to: (process.env.CONTACT_TO || "hello@imagenus.co.za").split(","),
      replyTo: email,
      subject,
      html: htmlBody,
    });
    if (error) throw new Error(`Resend: ${error.name} ${error.message}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
