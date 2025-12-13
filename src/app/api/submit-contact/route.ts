import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log("Received form data:", formData);

    // IMPORTANT: Replace this with your deployed Google Apps Script Web App URL
    // You need to create a Google Apps Script that acts as an intermediary
    // to receive this data and append it to your Google Sheet.
    // Example: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
    const GOOGLE_SHEET_WEB_APP_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"; 

    if (GOOGLE_SHEET_WEB_APP_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE") {
      return NextResponse.json(
        { message: "Google Apps Script Web App URL is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(GOOGLE_SHEET_WEB_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      redirect: "follow", // Important for Google Apps Script
    });

    if (response.ok) {
      return NextResponse.json({ message: "Data successfully sent to Google Sheet." });
    } else {
      const errorText = await response.text();
      console.error("Error from Google Apps Script:", errorText);
      return NextResponse.json(
        { message: `Failed to send data to Google Sheet: ${errorText}` },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
