<p align="center">
  <img src="https://github.com/Matheuschn/big-blue-button-mobile/blob/main/src/assets/icon.png?raw=true" alt="BigBlueButton icon" class="center" width="200" height="200" > 
</p>
<h1 align="center">
  BigBlueButton Mobile
</h1>
BigBlueButton Mobile is a mobile version of the ConferênciaWeb/BigBlueButton services used by Moodle, allowing the user to stay in the conference even
with the app on background, as well as other functionalities.

*Read this in other languages: [Português (Brasil)](README.md), [English](README.en.md).*

# Installation
For Android users, download the APK file clicking [here](https://github.com/Matheuschn/BigBlueButton-Mobile/releases/latest/download/BigBlueButtonMobile-v1.0.0.apk)
and install it after the download finishes. For more information about how to install an app through an APK file, click [here](https://www.alphr.com/install-apk-android/).

For iOS users, there isn't a download for now. If you're an iOS app developer and want to contribute to the project, contact me through [here](#contact).

# Usage
When the app is first opened, it will request permissions to the microphone and the camera, both used during the conference.
It's also necessary to login into Moodle to be able to access the meeting.

The app will be automatically opened when you click on a meeting link on Moodle. If not, see [My app did not open when I clicked on the meeting link](#my-app-did-not-open-when-i-clicked-on-the-meeting-link).
It's also possible to insert the meeting link manually into the app.

Unlike ConferênciaWeb/BigBlueButton through the browser, the app stays in the meeting, even when it's on the background or the phone is locked.

If the application detects that a large number of users left the meeting, it will send you a push notification informing you. This helps avoid the embarrassing situation of staying in the meeting after everyone has already left.

# Frequently Asked Questions
- [Where do I find the meeting's link on Moodle?](#where-do-i-find-the-meetings-link-on-moodle)
- [Why do I need to login into Moodle through the app? Is it safe?](#why-do-i-need-to-login-into-moodle-through-the-app-is-it-safe)
- ["Blocked by Play Protect" when installing the APK.](#blocked-by-play-protect-when-installing-the-apk)
- ["Send app for scanning?" when opening app for the first time.](#send-app-for-scanning-when-opening-app-for-the-first-time)
- [My app did not open when I clicked on the meeting link.](#my-app-did-not-open-when-i-clicked-on-the-meeting-link)

### Where do I find the meeting's link on Moodle?

The link the application uses to connect itself to the meeting **is not the link of the meeting**, but the link of the meeting's page on **Moodle**, that has a little blue icon on the left side. It is always of the type ``https://moodle.ufsc.br/mod/bigbluebuttonbn/view.php?id=XXXXXXX``, where the X's represent an unique code for each course.

### Why do I need to login into Moodle through the app? Is it safe?

For the app to access the meeting's page on ConferênciaWeb, it need to be logged in into Moodle. Unfortunately, it is not possible to use the information
already saved on the device, requiring a new login.
But do not worry! The app does not use nor has access to your login information.

### "Blocked by Play Protect" when installing the APK.

Since the app has not been published oficially to the Google Play Store, this message appears as a way to protect the user.
You may select "Install anyway" to continue the installation.

### "Send app for scanning?" when opening app for the first time.

As explained above, the app has not been published to the Google Play Store. You may select any of the two options, but it's recommended to select "Send".

### My app did not open when I clicked on the meeting link.

If you use the Mozilla Firefox browser, the app will not open when clicking on the link: it's required to go to the browser configuration (the three dots) and click the option "Open in app".
If the app still does not open, please use the manual link insertion mode and, if possible, [contact me](#contact).

# Compiling the app
**The following steps are recommended only for advanced users in specific test situations. If you do not fit into this category, see the [Installation](#installation) section.**

To compile the app from the source code, follow the steps:
  1. Run the command `npm install` in the directory.
  2. Run the command `npm start` in the directory.
  3. In another terminal, run the command `npm run android` in the directory.

# Contact
Any errors, questions, or suggestions, contact me through the e-mail [matheus.schneider.camilo@gmail.com](mailto:matheus.schneider.camilo@gmail.com) or through the project's page on GitHub, available [here](https://github.com/Matheuschn/BigBlueButton-Mobile).
