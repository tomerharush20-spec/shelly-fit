# Shelly Fit

**My fitness.** A fitness and sports app: a personal plan from a goals questionnaire, a workout log, 110 exercises in 3D with technique cues, a year-long training grid, and goals.

## Features
- One-time sign-up (username and phone, no verification) followed by a goals questionnaire that builds your plan
- Log sets and reps with +/− buttons, rest timer, supersets
- Focused workouts for two muscle groups, with a recommendation for the pair you trained least recently
- Program review every 4 weeks with suggestions to add load or swap exercises
- Weekly goals per training type, physical goals and body measurements
- Weekly sets per muscle group and a year grid colored by workout type
- Installs on your phone (home-screen icon, works offline after the first visit)

## Run it
- **Website:** single file `index.html`. Live on GitHub Pages: https://tomerharush20-spec.github.io/shelly-fit/
- **Phone (no store):** open the website and choose *Add to Home Screen*.
- **Android app:** every push to `main` builds an APK automatically and publishes it as the latest release. On an Android phone open https://github.com/tomerharush20-spec/shelly-fit/releases/latest/download/shelly-fit.apk and install it (allow *Install unknown apps*).

Data is stored on each user's own device (localStorage).

## Native app (Capacitor)
The same `index.html` runs inside a native shell with [Capacitor](https://capacitorjs.com). The 3D library is bundled so the app works fully offline.

```bash
npm install
npm run sync        # builds www/ and syncs Android/iOS
npm run android     # opens Android Studio
```

- App id: `com.shellyfit.app` · name: **Shelly Fit**
- Icons and splash screens are generated from `assets/` with `npm run assets`.

### iOS
Requires a Mac with Xcode and an Apple Developer account ($99/year):
```bash
npx cap add ios
npx capacitor-assets generate --ios
npm run ios
```

### Publishing to the stores
- **Google Play:** create a Play Console account ($25 one-time), create an upload keystore, then build a signed release bundle (`./gradlew bundleRelease`) and upload the `.aab`.
- **App Store:** archive in Xcode and upload through App Store Connect.
