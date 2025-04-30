// startup page
user_pref("browser.startup.page", 0); // 0 = blank page, 1 = previous session, 3 = homepage
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false); // disable loading content on new tab
user_pref("browser.newtab.preload", false); // don't preload new tab content
user_pref("browser.aboutwelcome.enabled", false); // skip welcome pages

// unnecessary background services
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.tabs.crashReporting.sendReport", false);

// disable animations
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("browser.tabs.animate", false);
user_pref("browser.fullscreen.animate", false);
user_pref("alerts.disableSlidingEffect", true);

// disable animations
user_pref("browser.sessionstore.resume_from_crash", false); // skip saving crash sessions
user_pref("browser.sessionstore.max_windows_undo", 0); // don't store closed windows
user_pref("browser.sessionstore.max_tabs_undo", 3);

user_pref("browser.shell.checkDefaultBrowser", false); // don't check if Firefox is default on startup
user_pref("startup.homepage_welcome_url", ""); // skip welcome URLs
user_pref("startup.homepage_welcome_url.additional", "");

user_pref("browser.startup.firstrunSkipsHomepage", true);
user_pref("extensions.pocket.enabled", false); // disable Pocket integration
user_pref("services.sync.engine.addons", false); // if you don't sync

// disabling bookmarks feature
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.bookmarks.showMobileBookmarks", false);
user_pref("browser.bookmarks.autoExportHTML", false);
user_pref("browser.bookmarks.editDialog.showForNewBookmarks", false);
user_pref("browser.toolbars.bookmarks.visibility", "never");

// appearance
user_pref("sidebar.verticalTabs", true);
user_pref("sidebar.position_start", false);

user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
user_pref("browser.theme.toolbar-theme", 0);
user_pref("browser.theme.content-theme", 0);

// Enable userChrome.css and userContent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
