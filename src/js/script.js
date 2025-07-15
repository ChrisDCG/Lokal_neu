/**
 * Audio Suite Pro - Main Application Script
 * 
 * A comprehensive web-based audio transcription and text editing tool
 * Features: Audio recording, AI transcription, multi-language support,
 * speaker recognition, custom vocabulary, and theme switching
 * 
 * @version 1.0.0
 * @author ChrisDCG
 * @license MIT
 */

'use strict'; // Enable strict mode for better error handling and code quality

// --- Translation Data ---
const translations = {
    de: {
        app_title_header: "Audio Suite Pro",
        settings_tooltip: "Einstellungen",
        language_tooltip: "Sprache wechseln",
        theme_toggle_tooltip: "Design wechseln",
        audio_fallback_tooltip: "Audio-Archiv anzeigen",
        settings_title: "Einstellungen",
        openai_api_key_label: "OpenAI API-Key",
        api_key_placeholder_modal: "sk-...",
        save_button: "Speichern",
        change_button: "Ändern",
        api_key_status_default: "Gib deinen OpenAI API-Key ein.",
        api_key_status_enter_new: "Gib den neuen API-Key ein.",
        api_key_status_saved: "Ein API-Key ist aktuell gespeichert.",
        api_key_status_empty: "API-Key darf nicht leer sein.",
        api_key_status_removed: "API-Key entfernt. Bitte gib einen neuen Key ein.",
        remove_api_key_button: "API-Key entfernen",
        close_button: "Schließen",
        vocabulary: "Vokabular",
        custom_vocabulary_title: "Eigenes Vokabular",
        new_vocab_term_placeholder: "Neuen Begriff eingeben...",
        add_button: "Hinzufügen",
        import_txt_button: ".txt Importieren",
        export_txt_button: ".txt Exportieren",
        term_column: "Begriff",
        action_column: "Aktion",
        no_vocabulary_message: "Kein Vokabular vorhanden.",
        audio_language_label: "Sprache des Audios (ISO 639-1):",
        auto_detect_option: "Automatisch erkennen",
        lang_option_de: "Deutsch (de)",
        lang_option_en: "Englisch (en)",
        lang_option_es: "Spanisch (es)",
        lang_option_fr: "Französisch (fr)",
        lang_option_zh: "Chinesisch (zh)",
        lang_option_ar: "Arabisch (ar)",
        transcription_context_label: "Kontext/Prompt für Transkription:",
        transcription_context_placeholder: "z.B. Juristisches Diktat, Fachbegriffe",
        transcription_temperature_label: "Transkriptions-Temperatur (0-1):",
        temperature_tooltip: "Niedriger (z.B. 0) = fokussierter, höher (z.B. 0.8) = kreativer. Standard: 0.",
        start_recording_button: "Aufnahme starten",
        stop_recording_button: "Aufnahme stoppen (F5)",
        upload_file_button: "Datei hochladen",
        f5_hint: "(Tipp: F5 zum Starten/Stoppen der Aufnahme)",
        recognize_speakers_checkbox: "Sprecher erkennen",
        direct_ai_improvement_checkbox: "Direkt KI-Verbesserung",
        continuous_transcription_checkbox: "Fortlaufende Transkription",
        time_tracking_dictation_checkbox: "Zeiterfassungsdiktat",
        audio_level_label: "Audiopegel:",
        status_ready: "Bereit.",
        status_recording: "Aufnahme läuft...",
        status_processing_audio: "Audiodaten werden verarbeitet...",
        status_transcribing: "Audiodaten werden transkribiert...",
        status_transcription_error: "Transkriptionsfehler.",
        status_transcription_done: "Transkription fertig.",
        status_refining_text: "Text wird geglättet...",
        status_summarizing_text: "Text wird zusammengefasst...",
        status_translating_text: "Text wird übersetzt...",
        status_reading_aloud: "Text wird vorgelesen...",
        status_tts_error: "Fehler bei Sprachausgabe.",
        status_tts_done: "Vorlesen beendet.",
        status_network_error: "Netzwerkfehler.",
        status_api_key_missing: "API-Key erforderlich.",
        transcript_text_label: "Transkript / Text",
        transcript_placeholder: "Transkript erscheint hier...",
        words_stats: "Wörter",
        characters_stats: "Zeichen",
        copy_button: "Kopieren",
        edit_button: "Bearbeiten",
        send_email_button: "An E-Mail senden",
        export_txt_action_button: "Als .txt exportieren",
        refine_text_button: "Text glätten",
        text_to_vocab_button: "Text zum Vokabular",
        summarize_button: "Zusammenfassen",
        read_aloud_button: "Vorlesen",
        delete_button: "Löschen",
        summary_label: "Zusammenfassung",
        summary_placeholder: "Zusammenfassung erscheint hier...",
        ai_translation_title: "Textübersetzung durch KI",
        target_language_label: "Zielsprache:",
        select_language_option: "-- Sprache wählen --",
        lang_translate_en_us: "Englisch (US)",
        lang_translate_de: "Deutsch",
        lang_translate_fr: "Französisch",
        lang_translate_es: "Spanisch",
        lang_translate_it: "Italienisch",
        lang_translate_pt_br: "Portugiesisch (BR)",
        lang_translate_nl: "Niederländisch",
        lang_translate_pl: "Polnisch",
        lang_translate_sv: "Schwedisch",
        lang_translate_ru: "Russisch",
        lang_translate_zh_cn: "Chinesisch (Vereinfacht)",
        lang_translate_ja: "Japanisch",
        lang_translate_ko: "Koreanisch",
        lang_translate_ar: "Arabisch",
        translate_button: "Übersetzen",
        source_text_label: "Ausgangstext:",
        translated_text_label: "Übersetzter Text:",
        translation_placeholder: "Übersetzung erscheint hier...",
        history_title: "Verlauf",
        toggle_history_tooltip: "Verlauf ein-/ausblenden",
        hide_history_button: "Verlauf ausblenden",
        show_history_button: "Verlauf einblenden",
        history_settings_tooltip: "Verlaufseinstellungen",
        export_button: "Exportieren",
        import_button: "Importieren",
        delete_selected_tooltip: "Ausgewählte Einträge löschen",
        delete_selection_button: "Auswahl löschen",
        clear_all_history_tooltip: "Gesamten Verlauf unwiderruflich löschen",
        clear_all_button: "Alles löschen",
        date_from_label: "Von:",
        date_to_label: "Bis:",
        clear_date_filter_tooltip: "Datumsfilter zurücksetzen",
        clear_filter_button: "Filter löschen",
        select_all_tooltip: "Alle sichtbaren Einträge auswählen/abwählen",
        select_all_label: "Alle auswählen",
        search_history_placeholder: "Verlauf durchsuchen...",
        history_settings_title: "Verlaufseinstellungen",
        max_history_items_label: "Max. Verlaufseinträge (1-200):",
        cancel_button: "Abbrechen",
        confirm_button: "Bestätigen",
        lang_de: "Deutsch",
        lang_en: "English",
        lang_fr: "Français",
        lang_es: "Español",
        lang_zh: "中文",
        lang_ar: "العربية",
        toast_no_text_to_copy: "Kein Text zum Kopieren vorhanden.",
        toast_copied_to_clipboard: "Text in Zwischenablage kopiert!",
        toast_copied_to_clipboard_fallback: "Text in Zwischenablage kopiert! (Fallback)",
        toast_copy_failed: "Kopieren fehlgeschlagen. Bitte manuell kopieren.",
        toast_no_api_key: "OpenAI API-Key fehlt. Bitte in den Einstellungen eingeben.",
        toast_api_key_saved_toast: "API-Key erfolgreich gespeichert!",
        toast_api_key_removed_toast: "API-Key entfernt.",
        toast_no_audio_data: "Keine Audiodaten zum Verarbeiten.",
        toast_transcription_error_api: "Transkriptionsfehler: ",
        toast_transcription_success: "Transkription erfolgreich!",
        toast_network_error_openai: "Netzwerkfehler oder OpenAI API nicht erreichbar.",
        toast_mic_access_error: "Fehler beim Zugriff auf das Mikrofon: ",
        toast_recording_error: "Aufnahmefehler.",
        toast_no_text_to_refine: "Kein Text zum Glätten vorhanden.",
        toast_refine_success: "Text erfolgreich geglättet!",
        toast_no_text_to_summarize: "Kein Text zum Zusammenfassen vorhanden.",
        toast_summarize_success: "Text erfolgreich zusammengefasst!",
        toast_no_text_to_read: "Kein Text zum Vorlesen vorhanden.",
        toast_tts_not_supported: "Text-to-Speech wird von Ihrem Browser nicht unterstützt.",
        toast_translation_missing_info: "Text oder Zielsprache für Übersetzung fehlt.",
        toast_translation_success: "Text erfolgreich übersetzt!",
        toast_vocab_added: "\"{value}\" zum Vokabular hinzugefügt.",
        toast_vocab_already_exists: "\"{value}\" ist bereits im Vokabular oder ungültig.",
        toast_vocab_enter_term: "Bitte einen Begriff eingeben.",
        toast_vocab_removed: "\"{value}\" aus Vokabular entfernt.",
        toast_vocab_import_select_txt: "Bitte eine .txt Datei auswählen.",
        toast_vocab_import_success: "{value} Begriff(e) importiert.",
        toast_vocab_import_no_new: "Keine neuen Begriffe zum Importieren gefunden oder Begriffe waren ungültig.",
        toast_vocab_export_no_vocab: "Kein Vokabular zum Exportieren vorhanden.",
        toast_vocab_export_success: "Vokabular exportiert.",
        toast_no_text_for_manual_vocab: "Kein Text im Transkriptfeld vorhanden.",
        toast_manual_vocab_added: "{value} neue(r) Begriff(e) aus dem Text zum Vokabular hinzugefügt.",
        toast_manual_vocab_no_new: "Keine neuen Begriffe im Text gefunden, die zum Vokabular hinzugefügt werden konnten.",
        toast_history_settings_saved: "Verlaufseinstellungen gespeichert.",
        toast_history_settings_invalid_max: "Ungültiger Wert für max. Einträge (1-200).",
        toast_history_entry_updated: "Verlaufseintrag aktualisiert.",
        toast_history_entry_deleted: "Eintrag gelöscht.",
        toast_history_selection_deleted: "{value} Eintrag/Einträge gelöscht.",
        toast_history_cleared: "Verlauf geleert.",
        toast_history_empty_export: "Verlauf ist leer. Nichts zu exportieren.",
        toast_history_export_success: "Verlauf exportiert.",
        toast_history_export_error: "Fehler beim Exportieren.",
        toast_history_import_select_json: "Bitte eine .json Datei auswählen.",
        toast_history_import_success: "Verlauf erfolgreich importiert.",
        toast_history_import_error: "Fehler beim Importieren: {value}",
        toast_history_import_file_read_error: "Fehler beim Lesen der Datei.",
        toast_history_date_filter_cleared: "Datumsfilter zurückgesetzt.",
        toast_no_history_selection_to_delete: "Keine Einträge zum Löschen ausgewählt.",
        confirm_delete_history_all: "Möchten Sie den gesamten Verlauf wirklich unwiderruflich löschen?",
        confirm_remove_api_key: "Möchten Sie den API-Key wirklich entfernen?",
        no_history_for_filter: "Keine Einträge für Ihre Suche/Filter gefunden.",
        history_empty: "Verlauf ist leer.",
        file_label: "Datei",
        mb_unit: "MB",
        email_no_text: "Kein Text zum Senden vorhanden.",
        email_subject_default: "Transkribierter Text / Notiz",
        export_txt_no_text: "Kein Text zum Exportieren vorhanden.",
        export_txt_success: "Transkript als .txt exportiert.",
        export_txt_filename_prefix: "Transkript",
        history_type_transcript: "Transkript",
        history_type_transcript_continuous: "Transkript (Fortlaufend)",
        history_type_refined: "Geglättet",
        history_type_time_tracking: "Zeiterfassung",
        history_type_summary: "Zusammenfassung",
        history_type_translation: "Übersetzung",
        history_type_imported: "Importiert",
        theme_changed_to_light: "Helles Design aktiviert.",
        theme_changed_to_dark: "Dunkles Design aktiviert.",
        audio_fallback_saved: "Audio im Archiv gespeichert.",
        audio_fallback_db_error: "Fehler bei Audio-Archiv Datenbank: ",
        audio_fallback_db_init_error: "Initialisierung der Audio-Archiv Datenbank fehlgeschlagen.",
        audio_fallbacks_title: "Audio-Archiv",
        no_audio_fallbacks_message: "Kein Audio-Archiv verfügbar.",
        play_audio_button: "Abspielen",
        retranscribe_audio_button: "Erneut transkribieren",
        download_audio_button: "Herunterladen",
        delete_audio_fallback_button: "Archiv-Eintrag löschen",
        confirm_delete_audio_fallback: "Möchten Sie diesen Eintrag aus dem Audio-Archiv wirklich löschen?",
        REFINE_TEXT_SYSTEM_PROMPT: `Du bist ein professioneller Texter und Lektor. Überarbeite den eingegebenen Text sorgfältig, um Klarheit, Stil, Grammatik, Rechtschreibung und Zeichensetzung zu optimieren. Das Ziel ist ein fehlerfreier, gut lesbarer und stilistisch ansprechender Text. Gib nur die überarbeitete Version aus. Wichtiger Hinweis für deutsche Texte: Nach Grußformeln wie "Viele Grüße", "Mit freundlichen Grüßen", "Hochachtungsvoll" etc. darf KEIN Komma oder ein anderes Satzzeichen gesetzt werden, es sei denn, es ist grammatikalisch durch den folgenden Hauptsatz zwingend erforderlich. Die Grußformel selbst sollte ohne nachgestelltes Komma stehen, wenn sie die Nachricht beendet oder von einer neuen Zeile/Unterschrift gefolgt wird.`,
        KORREKTUR_SYSTEM_PROMPT: "Du bist ein professioneller Korrektor. Korrigiere ausschließlich Rechtschreibung, Zeichensetzung und Grammatik des eingegebenen Textes. Der Sinn und Stil des Textes dürfen unter keinen Umständen verändert werden. Gib nur die korrigierte Version aus.",
        KORREKTUR_STIL_SYSTEM_PROMPT: "Du bist ein professioneller Lektor. Korrigiere Rechtschreibung, Zeichensetzung und Grammatik des eingegebenen Textes. Optimiere zusätzlich den Stil des Textes basierend auf dem Kontext, um Klarheit, Prägnanz und Lesbarkeit zu verbessern, ohne den ursprünglichen Sinn wesentlich zu verändern. Gib nur die überarbeitete Version aus.",
        SUMMARIZE_TEXT_SYSTEM_PROMPT: `Fasse den folgenden Text prägnant und präzise zusammen. Hebe die wichtigsten Punkte hervor. Gib nur die Zusammenfassung aus.`,
        TRANSLATION_SYSTEM_PROMPT_TEMPLATE: `You are a highly skilled and nuanced professional translator. Translate the provided text with exceptional accuracy and natural fluency into {targetLanguageName}. Output only the translated text.`
    },
    en: { // Assuming EN is mostly complete from previous turn, will verify
        app_title_header: "Audio Suite Pro",
        settings_tooltip: "Settings",
        language_tooltip: "Change Language",
        theme_toggle_tooltip: "Toggle Theme",
        audio_fallback_tooltip: "Show Audio Archive",
        settings_title: "Settings",
        openai_api_key_label: "OpenAI API Key",
        api_key_placeholder_modal: "sk-...",
        save_button: "Save",
        change_button: "Change",
        api_key_status_default: "Enter your OpenAI API Key.",
        api_key_status_enter_new: "Enter the new API Key.",
        api_key_status_saved: "An API Key is currently saved.",
        api_key_status_empty: "API Key cannot be empty.",
        api_key_status_removed: "API Key removed. Please enter a new key.",
        remove_api_key_button: "Remove API Key",
        close_button: "Close",
        vocabulary: "Vocabulary",
        custom_vocabulary_title: "Custom Vocabulary",
        new_vocab_term_placeholder: "Enter new term...",
        add_button: "Add",
        import_txt_button: "Import .txt",
        export_txt_button: "Export .txt",
        term_column: "Term",
        action_column: "Action",
        no_vocabulary_message: "No vocabulary available.",
        audio_language_label: "Audio Language (ISO 639-1):",
        auto_detect_option: "Auto-detect",
        lang_option_de: "German (de)",
        lang_option_en: "English (en)",
        lang_option_es: "Spanish (es)",
        lang_option_fr: "French (fr)",
        lang_option_zh: "Chinese (zh)",
        lang_option_ar: "Arabic (ar)",
        transcription_context_label: "Transcription Context/Prompt:",
        transcription_context_placeholder: "e.g., Legal dictation, technical terms",
        transcription_temperature_label: "Transcription Temperature (0-1):",
        temperature_tooltip: "Lower (e.g., 0) = more focused, higher (e.g., 0.8) = more creative. Default: 0.",
        start_recording_button: "Start Recording",
        stop_recording_button: "Stop Recording (F5)",
        upload_file_button: "Upload File",
        f5_hint: "(Tip: F5 to start/stop recording)",
        recognize_speakers_checkbox: "Recognize Speakers",
        direct_ai_improvement_checkbox: "Direct AI Improvement",
        continuous_transcription_checkbox: "Continuous Transcription",
        time_tracking_dictation_checkbox: "Time Tracking Dictation",
        audio_level_label: "Audio Level:",
        status_ready: "Ready.",
        status_recording: "Recording...",
        status_processing_audio: "Processing audio...",
        status_transcribing: "Transcribing audio...",
        status_transcription_error: "Transcription error.",
        status_transcription_done: "Transcription finished.",
        status_refining_text: "Refining text...",
        status_summarizing_text: "Summarizing text...",
        status_translating_text: "Translating text...",
        status_reading_aloud: "Reading text aloud...",
        status_tts_error: "Text-to-speech error.",
        status_tts_done: "Finished reading aloud.",
        status_network_error: "Network error.",
        status_api_key_missing: "API Key required.",
        transcript_text_label: "Transcript / Text",
        transcript_placeholder: "Transcript will appear here...",
        words_stats: "Words",
        characters_stats: "Characters",
        copy_button: "Copy",
        edit_button: "Edit",
        send_email_button: "Send to Email",
        export_txt_action_button: "Export as .txt",
        refine_text_button: "Refine Text",
        text_to_vocab_button: "Text to Vocabulary",
        summarize_button: "Summarize",
        read_aloud_button: "Read Aloud",
        delete_button: "Delete",
        summary_label: "Summary",
        summary_placeholder: "Summary will appear here...",
        ai_translation_title: "AI Text Translation",
        target_language_label: "Target Language:",
        select_language_option: "-- Select Language --",
        lang_translate_en_us: "English (US)",
        lang_translate_de: "German",
        lang_translate_fr: "French",
        lang_translate_es: "Spanish",
        lang_translate_it: "Italian",
        lang_translate_pt_br: "Portuguese (BR)",
        lang_translate_nl: "Dutch",
        lang_translate_pl: "Polish",
        lang_translate_sv: "Swedish",
        lang_translate_ru: "Russian",
        lang_translate_zh_cn: "Chinese (Simplified)",
        lang_translate_ja: "Japanese",
        lang_translate_ko: "Korean",
        lang_translate_ar: "Arabic",
        translate_button: "Translate",
        source_text_label: "Source Text:",
        translated_text_label: "Translated Text:",
        translation_placeholder: "Translation will appear here...",
        history_title: "History",
        toggle_history_tooltip: "Show/Hide History",
        hide_history_button: "Hide History",
        show_history_button: "Show History",
        history_settings_tooltip: "History Settings",
        export_button: "Export",
        import_button: "Import",
        delete_selected_tooltip: "Delete Selected Entries",
        delete_selection_button: "Delete Selection",
        clear_all_history_tooltip: "Permanently delete all history",
        clear_all_button: "Clear All",
        date_from_label: "From:",
        date_to_label: "To:",
        clear_date_filter_tooltip: "Clear Date Filter",
        clear_filter_button: "Clear Filter",
        select_all_tooltip: "Select/Deselect all visible entries",
        select_all_label: "Select All",
        search_history_placeholder: "Search history...",
        history_settings_title: "History Settings",
        max_history_items_label: "Max. History Entries (1-200):",
        cancel_button: "Cancel",
        confirm_button: "Confirm",
        lang_de: "German",
        lang_en: "English",
        lang_fr: "French",
        lang_es: "Spanish",
        lang_zh: "Chinese",
        lang_ar: "Arabic",
        toast_no_text_to_copy: "No text to copy.",
        toast_copied_to_clipboard: "Text copied to clipboard!",
        toast_copied_to_clipboard_fallback: "Text copied to clipboard! (Fallback)",
        toast_copy_failed: "Copy failed. Please copy manually.",
        toast_no_api_key: "OpenAI API Key missing. Please enter it in settings.",
        toast_api_key_saved_toast: "API Key saved successfully!",
        toast_api_key_removed_toast: "API Key removed.",
        toast_no_audio_data: "No audio data to process.",
        toast_transcription_error_api: "Transcription error: ",
        toast_transcription_success: "Transcription successful!",
        toast_network_error_openai: "Network error or OpenAI API unreachable.",
        toast_mic_access_error: "Error accessing microphone: ",
        toast_recording_error: "Recording error.",
        toast_no_text_to_refine: "No text to refine.",
        toast_refine_success: "Text refined successfully!",
        toast_no_text_to_summarize: "No text to summarize.",
        toast_summarize_success: "Text summarized successfully!",
        toast_no_text_to_read: "No text to read aloud.",
        toast_tts_not_supported: "Text-to-Speech is not supported by your browser.",
        toast_translation_missing_info: "Text or target language for translation is missing.",
        toast_translation_success: "Text translated successfully!",
        toast_vocab_added: "\"{value}\" added to vocabulary.",
        toast_vocab_already_exists: "\"{value}\" is already in vocabulary or invalid.",
        toast_vocab_enter_term: "Please enter a term.",
        toast_vocab_removed: "\"{value}\" removed from vocabulary.",
        toast_vocab_import_select_txt: "Please select a .txt file.",
        toast_vocab_import_success: "{value} term(s) imported.",
        toast_vocab_import_no_new: "No new terms found to import or terms were invalid.",
        toast_vocab_export_no_vocab: "No vocabulary to export.",
        toast_vocab_export_success: "Vocabulary exported.",
        toast_no_text_for_manual_vocab: "No text in transcript field.",
        toast_manual_vocab_added: "{value} new term(s) added to vocabulary from text.",
        toast_manual_vocab_no_new: "No new terms found in text to add to vocabulary.",
        toast_history_settings_saved: "History settings saved.",
        toast_history_settings_invalid_max: "Invalid value for max. entries (1-200).",
        toast_history_entry_updated: "History entry updated.",
        toast_history_entry_deleted: "Entry deleted.",
        toast_history_selection_deleted: "{value} entry/entries deleted.",
        toast_history_cleared: "History cleared.",
        toast_history_empty_export: "History is empty. Nothing to export.",
        toast_history_export_success: "History exported.",
        toast_history_export_error: "Error exporting history.",
        toast_history_import_select_json: "Please select a .json file.",
        toast_history_import_success: "History imported successfully.",
        toast_history_import_error: "Error importing history: {value}",
        toast_history_import_file_read_error: "Error reading file.",
        toast_history_date_filter_cleared: "Date filter cleared.",
        toast_no_history_selection_to_delete: "No entries selected for deletion.",
        confirm_delete_history_all: "Are you sure you want to permanently delete all history?",
        confirm_remove_api_key: "Are you sure you want to remove the API Key?",
        no_history_for_filter: "No entries found for your search/filter.",
        history_empty: "History is empty.",
        file_label: "File",
        mb_unit: "MB",
        email_no_text: "No text to send.",
        email_subject_default: "Transcribed Text / Note",
        export_txt_no_text: "No text to export.",
        export_txt_success: "Transcript exported as .txt.",
        export_txt_filename_prefix: "Transcript",
        history_type_transcript: "Transcript",
        history_type_transcript_continuous: "Transcript (Continuous)",
        history_type_refined: "Refined",
        history_type_time_tracking: "Time Tracking",
        history_type_summary: "Summary",
        history_type_translation: "Translation",
        history_type_imported: "Imported",
        theme_changed_to_light: "Light theme activated.",
        theme_changed_to_dark: "Dark theme activated.",
        audio_fallback_saved: "Audio saved to archive.",
        audio_fallback_db_error: "Audio archive database error: ",
        audio_fallback_db_init_error: "Audio archive database initialization failed.",
        audio_fallbacks_title: "Audio Archive",
        no_audio_fallbacks_message: "No audio archive available.",
        play_audio_button: "Play",
        retranscribe_audio_button: "Re-Transcribe",
        download_audio_button: "Download",
        delete_audio_fallback_button: "Delete Archive Entry",
        confirm_delete_audio_fallback: "Are you sure you want to delete this audio archive entry?",
        REFINE_TEXT_SYSTEM_PROMPT: `You are a professional copy editor and proofreader. Carefully revise the input text to optimize clarity, style, grammar, spelling, and punctuation. The goal is an error-free, highly readable, and stylistically polished text. Output only the revised version.`,
        KORREKTUR_SYSTEM_PROMPT: "You are a professional proofreader. Correct only spelling, punctuation, and grammar of the input text. The meaning and style of the text must not be changed under any circumstances. Output only the corrected version.",
        KORREKTUR_STIL_SYSTEM_PROMPT: "You are a professional editor. Correct spelling, punctuation, and grammar of the input text. Additionally, optimize the style of the text based on the context to improve clarity, conciseness, and readability, without significantly altering the original meaning. Output only the revised version.",
        SUMMARIZE_TEXT_SYSTEM_PROMPT: `Summarize the following text concisely and accurately. Highlight the main points. Output only the summary.`,
        TRANSLATION_SYSTEM_PROMPT_TEMPLATE: `You are a highly skilled and nuanced professional translator. Translate the provided text with exceptional accuracy and natural fluency into {targetLanguageName}. Output only the translated text.`
    },
    fr: {
        app_title_header: "Audio Suite Pro",
        settings_tooltip: "Paramètres",
        language_tooltip: "Changer de langue",
        theme_toggle_tooltip: "Changer de thème",
        audio_fallback_tooltip: "Afficher les archives audio",
        settings_title: "Paramètres",
        openai_api_key_label: "Clé API OpenAI",
        api_key_placeholder_modal: "sk-...",
        save_button: "Enregistrer",
        change_button: "Modifier",
        api_key_status_default: "Entrez votre clé API OpenAI.",
        api_key_status_enter_new: "Entrez la nouvelle clé API.",
        api_key_status_saved: "Une clé API est actuellement enregistrée.",
        api_key_status_empty: "La clé API ne peut pas être vide.",
        api_key_status_removed: "Clé API supprimée. Veuillez entrer une nouvelle clé.",
        remove_api_key_button: "Supprimer la clé API",
        close_button: "Fermer",
        vocabulary: "Vocabulaire",
        custom_vocabulary_title: "Vocabulaire personnalisé",
        new_vocab_term_placeholder: "Entrez un nouveau terme...",
        add_button: "Ajouter",
        import_txt_button: "Importer .txt",
        export_txt_button: "Exporter .txt",
        term_column: "Terme",
        action_column: "Action",
        no_vocabulary_message: "Aucun vocabulaire disponible.",
        audio_language_label: "Langue de l'audio (ISO 639-1):",
        auto_detect_option: "Détection automatique",
        lang_option_de: "Allemand (de)",
        lang_option_en: "Anglais (en)",
        lang_option_es: "Espagnol (es)",
        lang_option_fr: "Français (fr)",
        lang_option_zh: "Chinois (zh)",
        lang_option_ar: "Arabe (ar)",
        transcription_context_label: "Contexte/Prompt pour la transcription:",
        transcription_context_placeholder: "ex: Dictée juridique, termes techniques",
        transcription_temperature_label: "Température de transcription (0-1):",
        temperature_tooltip: "Plus bas (ex: 0) = plus ciblé, plus haut (ex: 0.8) = plus créatif. Défaut: 0.",
        start_recording_button: "Démarrer l'enregistrement",
        stop_recording_button: "Arrêter l'enregistrement (F5)",
        upload_file_button: "Télécharger un fichier",
        f5_hint: "(Astuce: F5 pour démarrer/arrêter l'enregistrement)",
        recognize_speakers_checkbox: "Reconnaître les locuteurs",
        direct_ai_improvement_checkbox: "Amélioration directe par IA",
        continuous_transcription_checkbox: "Transcription continue",
        time_tracking_dictation_checkbox: "Dictée avec suivi du temps",
        audio_level_label: "Niveau audio:",
        status_ready: "Prêt.",
        status_recording: "Enregistrement en cours...",
        status_processing_audio: "Traitement audio en cours...",
        status_transcribing: "Transcription en cours...",
        status_transcription_error: "Erreur de transcription.",
        status_transcription_done: "Transcription terminée.",
        status_refining_text: "Amélioration du texte en cours...",
        status_summarizing_text: "Résumé du texte en cours...",
        status_translating_text: "Traduction du texte en cours...",
        status_reading_aloud: "Lecture du texte en cours...",
        status_tts_error: "Erreur de synthèse vocale.",
        status_tts_done: "Lecture terminée.",
        status_network_error: "Erreur réseau.",
        status_api_key_missing: "Clé API requise.",
        transcript_text_label: "Transcription / Texte",
        transcript_placeholder: "La transcription apparaîtra ici...",
        words_stats: "Mots",
        characters_stats: "Caractères",
        copy_button: "Copier",
        edit_button: "Modifier",
        send_email_button: "Envoyer par e-mail",
        export_txt_action_button: "Exporter en .txt",
        refine_text_button: "Améliorer le texte",
        text_to_vocab_button: "Texte vers vocabulaire",
        summarize_button: "Résumer",
        read_aloud_button: "Lire à voix haute",
        delete_button: "Supprimer",
        summary_label: "Résumé",
        summary_placeholder: "Le résumé apparaîtra ici...",
        ai_translation_title: "Traduction de texte par IA",
        target_language_label: "Langue cible:",
        select_language_option: "-- Choisir la langue --",
        lang_translate_en_us: "Anglais (US)",
        lang_translate_de: "Allemand",
        lang_translate_fr: "Français",
        lang_translate_es: "Espagnol",
        lang_translate_it: "Italien",
        lang_translate_pt_br: "Portugais (BR)",
        lang_translate_nl: "Néerlandais",
        lang_translate_pl: "Polonais",
        lang_translate_sv: "Suédois",
        lang_translate_ru: "Russe",
        lang_translate_zh_cn: "Chinois (Simplifié)",
        lang_translate_ja: "Japonais",
        lang_translate_ko: "Coréen",
        lang_translate_ar: "Arabe",
        translate_button: "Traduire",
        source_text_label: "Texte source:",
        translated_text_label: "Texte traduit:",
        translation_placeholder: "La traduction apparaîtra ici...",
        history_title: "Historique",
        toggle_history_tooltip: "Afficher/Masquer l'historique",
        hide_history_button: "Masquer l'historique",
        show_history_button: "Afficher l'historique",
        history_settings_tooltip: "Paramètres de l'historique",
        export_button: "Exporter",
        import_button: "Importer",
        delete_selected_tooltip: "Supprimer les entrées sélectionnées",
        delete_selection_button: "Supprimer la sélection",
        clear_all_history_tooltip: "Supprimer définitivement tout l'historique",
        clear_all_button: "Tout effacer",
        date_from_label: "De:",
        date_to_label: "À:",
        clear_date_filter_tooltip: "Effacer le filtre de date",
        clear_filter_button: "Effacer le filtre",
        select_all_tooltip: "Sélectionner/Désélectionner toutes les entrées visibles",
        select_all_label: "Tout sélectionner",
        search_history_placeholder: "Rechercher dans l'historique...",
        history_settings_title: "Paramètres de l'historique",
        max_history_items_label: "Max. d'entrées d'historique (1-200):",
        cancel_button: "Annuler",
        confirm_button: "Confirmer",
        lang_de: "Allemand",
        lang_en: "Anglais",
        lang_fr: "Français",
        lang_es: "Espagnol",
        lang_zh: "Chinois",
        lang_ar: "Arabe",
        toast_no_text_to_copy: "Aucun texte à copier.",
        toast_copied_to_clipboard: "Texte copié dans le presse-papiers!",
        toast_copied_to_clipboard_fallback: "Texte copié dans le presse-papiers! (Alternative)",
        toast_copy_failed: "Échec de la copie. Veuillez copier manuellement.",
        toast_no_api_key: "Clé API OpenAI manquante. Veuillez l'entrer dans les paramètres.",
        toast_api_key_saved_toast: "Clé API enregistrée avec succès!",
        toast_api_key_removed_toast: "Clé API supprimée.",
        toast_no_audio_data: "Aucune donnée audio à traiter.",
        toast_transcription_error_api: "Erreur de transcription: ",
        toast_transcription_success: "Transcription réussie!",
        toast_network_error_openai: "Erreur réseau ou API OpenAI inaccessible.",
        toast_mic_access_error: "Erreur d'accès au microphone: ",
        toast_recording_error: "Erreur d'enregistrement.",
        toast_no_text_to_refine: "Aucun texte à améliorer.",
        toast_refine_success: "Texte amélioré avec succès!",
        toast_no_text_to_summarize: "Aucun texte à résumer.",
        toast_summarize_success: "Texte résumé avec succès!",
        toast_no_text_to_read: "Aucun texte à lire à voix haute.",
        toast_tts_not_supported: "La synthèse vocale n'est pas supportée par votre navigateur.",
        toast_translation_missing_info: "Texte ou langue cible pour la traduction manquant.",
        toast_translation_success: "Texte traduit avec succès!",
        toast_vocab_added: "\"{value}\" ajouté au vocabulaire.",
        toast_vocab_already_exists: "\"{value}\" est déjà dans le vocabulaire ou invalide.",
        toast_vocab_enter_term: "Veuillez entrer un terme.",
        toast_vocab_removed: "\"{value}\" supprimé du vocabulaire.",
        toast_vocab_import_select_txt: "Veuillez sélectionner un fichier .txt.",
        toast_vocab_import_success: "{value} terme(s) importé(s).",
        toast_vocab_import_no_new: "Aucun nouveau terme trouvé à importer ou termes invalides.",
        toast_vocab_export_no_vocab: "Aucun vocabulaire à exporter.",
        toast_vocab_export_success: "Vocabulaire exporté.",
        toast_no_text_for_manual_vocab: "Aucun texte dans le champ de transcription.",
        toast_manual_vocab_added: "{value} nouveau(x) terme(s) ajouté(s) au vocabulaire à partir du texte.",
        toast_manual_vocab_no_new: "Aucun nouveau terme trouvé dans le texte à ajouter au vocabulaire.",
        toast_history_settings_saved: "Paramètres de l'historique enregistrés.",
        toast_history_settings_invalid_max: "Valeur invalide pour max. entrées (1-200).",
        toast_history_entry_updated: "Entrée d'historique mise à jour.",
        toast_history_entry_deleted: "Entrée supprimée.",
        toast_history_selection_deleted: "{value} entrée(s) supprimée(s).",
        toast_history_cleared: "Historique effacé.",
        toast_history_empty_export: "L'historique est vide. Rien à exporter.",
        toast_history_export_success: "Historique exporté.",
        toast_history_export_error: "Erreur lors de l'exportation.",
        toast_history_import_select_json: "Veuillez sélectionner un fichier .json.",
        toast_history_import_success: "Historique importé avec succès.",
        toast_history_import_error: "Erreur lors de l'importation: {value}",
        toast_history_import_file_read_error: "Erreur de lecture du fichier.",
        toast_history_date_filter_cleared: "Filtre de date effacé.",
        toast_no_history_selection_to_delete: "Aucune entrée sélectionnée pour suppression.",
        confirm_delete_history_all: "Voulez-vous vraiment supprimer définitivement tout l'historique?",
        confirm_remove_api_key: "Voulez-vous vraiment supprimer la clé API?",
        no_history_for_filter: "Aucune entrée trouvée pour votre recherche/filtre.",
        history_empty: "L'historique est vide.",
        file_label: "Fichier",
        mb_unit: "Mo",
        email_no_text: "Aucun texte à envoyer.",
        email_subject_default: "Texte transcrit / Note",
        export_txt_no_text: "Aucun texte à exporter.",
        export_txt_success: "Transcription exportée en .txt.",
        export_txt_filename_prefix: "Transcription",
        history_type_transcript: "Transcription",
        history_type_transcript_continuous: "Transcription (Continue)",
        history_type_refined: "Amélioré",
        history_type_time_tracking: "Suivi du temps",
        history_type_summary: "Résumé",
        history_type_translation: "Traduction",
        history_type_imported: "Importé",
        theme_changed_to_light: "Thème clair activé.",
        theme_changed_to_dark: "Thème sombre activé.",
        audio_fallback_saved: "Audio enregistré dans les archives.",
        audio_fallback_db_error: "Erreur de base de données des archives audio : ",
        audio_fallback_db_init_error: "L'initialisation de la base de données des archives audio a échoué.",
        audio_fallbacks_title: "Archives audio",
        no_audio_fallbacks_message: "Aucune archive audio disponible.",
        play_audio_button: "Lire",
        retranscribe_audio_button: "Retranscrire",
        download_audio_button: "Télécharger",
        delete_audio_fallback_button: "Supprimer l'entrée d'archive",
        confirm_delete_audio_fallback: "Êtes-vous sûr de vouloir supprimer cette entrée d'archive audio ?",
        REFINE_TEXT_SYSTEM_PROMPT: `Vous êtes un rédacteur et correcteur professionnel. Révisez attentivement le texte d'entrée pour optimiser la clarté, le style, la grammaire, l'orthographe et la ponctuation. L'objectif est un texte sans erreur, très lisible et stylistiquement soigné. Ne retournez que la version révisée.`,
        KORREKTUR_SYSTEM_PROMPT: "Vous êtes un correcteur professionnel. Corrigez uniquement l'orthographe, la ponctuation et la grammaire du texte d'entrée. Le sens et le style du texte ne doivent en aucun cas être modifiés. Ne retournez que la version corrigée.",
        KORREKTUR_STIL_SYSTEM_PROMPT: "Vous êtes un rédacteur professionnel. Corrigez l'orthographe, la ponctuation et la grammaire du texte d'entrée. Optimisez en plus le style du texte en fonction du contexte pour améliorer la clarté, la concision et la lisibilité, sans altérer significativement le sens original. Ne retournez que la version révisée.",
        SUMMARIZE_TEXT_SYSTEM_PROMPT: `Résumez le texte suivant de manière concise et précise. Mettez en évidence les points principaux. Ne retournez que le résumé.`,
        TRANSLATION_SYSTEM_PROMPT_TEMPLATE: `Vous êtes un traducteur professionnel hautement qualifié et nuancé. Traduisez le texte fourni avec une précision exceptionnelle et une fluidité naturelle en {targetLanguageName}. Ne retournez que le texte traduit.`
    },
    es: {
        app_title_header: "Audio Suite Pro",
        settings_tooltip: "Configuración",
        language_tooltip: "Cambiar idioma",
        theme_toggle_tooltip: "Cambiar tema",
        audio_fallback_tooltip: "Mostrar archivo de audio",
        settings_title: "Configuración",
        openai_api_key_label: "Clave API de OpenAI",
        api_key_placeholder_modal: "sk-...",
        save_button: "Guardar",
        change_button: "Cambiar",
        api_key_status_default: "Introduce tu clave API de OpenAI.",
        api_key_status_enter_new: "Introduce la nueva clave API.",
        api_key_status_saved: "Hay una clave API guardada actualmente.",
        api_key_status_empty: "La clave API no puede estar vacía.",
        api_key_status_removed: "Clave API eliminada. Introduce una nueva clave.",
        remove_api_key_button: "Eliminar clave API",
        close_button: "Cerrar",
        vocabulary: "Vocabulario",
        custom_vocabulary_title: "Vocabulario personalizado",
        new_vocab_term_placeholder: "Introduce un nuevo término...",
        add_button: "Añadir",
        import_txt_button: "Importar .txt",
        export_txt_button: "Exportar .txt",
        term_column: "Término",
        action_column: "Acción",
        no_vocabulary_message: "No hay vocabulario disponible.",
        audio_language_label: "Idioma del audio (ISO 639-1):",
        auto_detect_option: "Detección automática",
        lang_option_de: "Alemán (de)",
        lang_option_en: "Inglés (en)",
        lang_option_es: "Español (es)",
        lang_option_fr: "Francés (fr)",
        lang_option_zh: "Chino (zh)",
        lang_option_ar: "Árabe (ar)",
        transcription_context_label: "Contexto/Prompt para la transcripción:",
        transcription_context_placeholder: "ej: Dictado legal, términos técnicos",
        transcription_temperature_label: "Temperatura de transcripción (0-1):",
        temperature_tooltip: "Más bajo (ej: 0) = más enfocado, más alto (ej: 0.8) = más creativo. Predeterminado: 0.",
        start_recording_button: "Iniciar grabación",
        stop_recording_button: "Detener grabación (F5)",
        upload_file_button: "Subir archivo",
        f5_hint: "(Consejo: F5 para iniciar/detener la grabación)",
        recognize_speakers_checkbox: "Reconocer hablantes",
        direct_ai_improvement_checkbox: "Mejora directa por IA",
        continuous_transcription_checkbox: "Transcripción continua",
        time_tracking_dictation_checkbox: "Dictado con seguimiento de tiempo",
        audio_level_label: "Nivel de audio:",
        status_ready: "Listo.",
        status_recording: "Grabando...",
        status_processing_audio: "Procesando audio...",
        status_transcribing: "Transcribiendo audio...",
        status_transcription_error: "Error de transcripción.",
        status_transcription_done: "Transcripción finalizada.",
        status_refining_text: "Mejorando texto...",
        status_summarizing_text: "Resumiendo texto...",
        status_translating_text: "Traduciendo texto...",
        status_reading_aloud: "Leyendo texto en voz alta...",
        status_tts_error: "Error de texto a voz.",
        status_tts_done: "Lectura en voz alta finalizada.",
        status_network_error: "Error de red.",
        status_api_key_missing: "Se requiere clave API.",
        transcript_text_label: "Transcripción / Texto",
        transcript_placeholder: "La transcripción aparecerá aquí...",
        words_stats: "Palabras",
        characters_stats: "Caracteres",
        copy_button: "Copiar",
        edit_button: "Editar",
        send_email_button: "Enviar por correo electrónico",
        export_txt_action_button: "Exportar como .txt",
        refine_text_button: "Mejorar texto",
        text_to_vocab_button: "Texto a vocabulario",
        summarize_button: "Resumir",
        read_aloud_button: "Leer en voz alta",
        delete_button: "Eliminar",
        summary_label: "Resumen",
        summary_placeholder: "El resumen aparecerá aquí...",
        ai_translation_title: "Traducción de texto por IA",
        target_language_label: "Idioma de destino:",
        select_language_option: "-- Seleccionar idioma --",
        lang_translate_en_us: "Inglés (EE. UU.)",
        lang_translate_de: "Alemán",
        lang_translate_fr: "Francés",
        lang_translate_es: "Español",
        lang_translate_it: "Italiano",
        lang_translate_pt_br: "Portugués (BR)",
        lang_translate_nl: "Neerlandés",
        lang_translate_pl: "Polaco",
        lang_translate_sv: "Sueco",
        lang_translate_ru: "Ruso",
        lang_translate_zh_cn: "Chino (Simplificado)",
        lang_translate_ja: "Japonés",
        lang_translate_ko: "Coreano",
        lang_translate_ar: "Árabe",
        translate_button: "Traducir",
        source_text_label: "Texto original:",
        translated_text_label: "Texto traducido:",
        translation_placeholder: "La traducción aparecerá aquí...",
        history_title: "Historial",
        toggle_history_tooltip: "Mostrar/Ocultar historial",
        hide_history_button: "Ocultar historial",
        show_history_button: "Mostrar historial",
        history_settings_tooltip: "Configuración del historial",
        export_button: "Exportar",
        import_button: "Importar",
        delete_selected_tooltip: "Eliminar entradas seleccionadas",
        delete_selection_button: "Eliminar selección",
        clear_all_history_tooltip: "Eliminar permanentemente todo el historial",
        clear_all_button: "Borrar todo",
        date_from_label: "Desde:",
        date_to_label: "Hasta:",
        clear_date_filter_tooltip: "Limpiar filtro de fecha",
        clear_filter_button: "Limpiar filtro",
        select_all_tooltip: "Seleccionar/Deseleccionar todas las entradas visibles",
        select_all_label: "Seleccionar todo",
        search_history_placeholder: "Buscar en el historial...",
        history_settings_title: "Configuración del historial",
        max_history_items_label: "Máx. entradas de historial (1-200):",
        cancel_button: "Cancelar",
        confirm_button: "Confirmar",
        lang_de: "Alemán",
        lang_en: "Inglés",
        lang_fr: "Francés",
        lang_es: "Español",
        lang_zh: "Chino",
        lang_ar: "Árabe",
        toast_no_text_to_copy: "No hay texto para copiar.",
        toast_copied_to_clipboard: "¡Texto copiado al portapapeles!",
        toast_copied_to_clipboard_fallback: "¡Texto copiado al portapapeles! (Alternativa)",
        toast_copy_failed: "Error al copiar. Por favor, copia manually.",
        toast_no_api_key: "Falta la clave API de OpenAI. Por favor, introdúcela en la configuración.",
        toast_api_key_saved_toast: "¡Clave API guardada correctamente!",
        toast_api_key_removed_toast: "Clave API eliminada.",
        toast_no_audio_data: "No hay datos de audio para procesar.",
        toast_transcription_error_api: "Error de transcripción: ",
        toast_transcription_success: "¡Transcripción correcta!",
        toast_network_error_openai: "Error de red o API de OpenAI inaccesible.",
        toast_mic_access_error: "Error al acceder al micrófono: ",
        toast_recording_error: "Error de grabación.",
        toast_no_text_to_refine: "No hay texto para mejorar.",
        toast_refine_success: "¡Texto mejorado correctamente!",
        toast_no_text_to_summarize: "No hay texto para resumir.",
        toast_summarize_success: "¡Texto resumido correctamente!",
        toast_no_text_to_read: "No hay texto para leer en voz alta.",
        toast_tts_not_supported: "El navegador no admite la función de texto a voz.",
        toast_translation_missing_info: "Falta el texto o el idioma de destino para la traducción.",
        toast_translation_success: "¡Texto traducido correctamente!",
        toast_vocab_added: "\"{value}\" añadido al vocabulario.",
        toast_vocab_already_exists: "\"{value}\" ya existe en el vocabulario o no es válido.",
        toast_vocab_enter_term: "Por favor, introduce un término.",
        toast_vocab_removed: "\"{value}\" eliminado del vocabulario.",
        toast_vocab_import_select_txt: "Por favor, selecciona un archivo .txt.",
        toast_vocab_import_success: "{value} término(s) importado(s).",
        toast_vocab_import_no_new: "No se encontraron nuevos términos para importar o los términos no eran válidos.",
        toast_vocab_export_no_vocab: "No hay vocabulario para exportar.",
        toast_vocab_export_success: "Vocabulario exportado.",
        toast_no_text_for_manual_vocab: "No hay texto en el campo de transcripción.",
        toast_manual_vocab_added: "{value} nuevo(s) término(s) añadido(s) al vocabulario desde el texto.",
        toast_manual_vocab_no_new: "No se encontraron nuevos términos en el texto para añadir al vocabulario.",
        toast_history_settings_saved: "Configuración del historial guardada.",
        toast_history_settings_invalid_max: "Valor no válido para máx. entradas (1-200).",
        toast_history_entry_updated: "Entrada del historial actualizada.",
        toast_history_entry_deleted: "Entrada eliminada.",
        toast_history_selection_deleted: "{value} entrada(s) eliminada(s).",
        toast_history_cleared: "Historial borrado.",
        toast_history_empty_export: "El historial está vacío. Nada que exportar.",
        toast_history_export_success: "Historial exportado.",
        toast_history_export_error: "Error al exportar el historial.",
        toast_history_import_select_json: "Por favor, selecciona un archivo .json.",
        toast_history_import_success: "Historial importado correctamente.",
        toast_history_import_error: "Error al importar el historial: {value}",
        toast_history_import_file_read_error: "Error al leer el archivo.",
        toast_history_date_filter_cleared: "Filtro de fecha limpiado.",
        toast_no_history_selection_to_delete: "No hay entradas seleccionadas para eliminar.",
        confirm_delete_history_all: "¿Estás seguro de que quieres eliminar permanentemente todo el historial?",
        confirm_remove_api_key: "¿Estás seguro de que quieres eliminar la clave API?",
        no_history_for_filter: "No se encontraron entradas para tu búsqueda/filtro.",
        history_empty: "El historial está vacío.",
        file_label: "Archivo",
        mb_unit: "MB",
        email_no_text: "No hay texto para enviar.",
        email_subject_default: "Texto transcrito / Nota",
        export_txt_no_text: "No hay texto para exportar.",
        export_txt_success: "Transcripción exportada como .txt.",
        export_txt_filename_prefix: "Transcripcion",
        history_type_transcript: "Transcripción",
        history_type_transcript_continuous: "Transcripción (Continua)",
        history_type_refined: "Mejorado",
        history_type_time_tracking: "Seguimiento de tiempo",
        history_type_summary: "Resumen",
        history_type_translation: "Traducción",
        history_type_imported: "Importado",
        theme_changed_to_light: "Tema claro activado.",
        theme_changed_to_dark: "Tema oscuro activado.",
        audio_fallback_saved: "Audio guardado en el archivo.",
        audio_fallback_db_error: "Error en la base de datos del archivo de audio: ",
        audio_fallback_db_init_error: "Falló la inicialización de la base de datos del archivo de audio.",
        audio_fallbacks_title: "Archivo de Audio",
        no_audio_fallbacks_message: "No hay archivos de audio disponibles.",
        play_audio_button: "Reproducir",
        retranscribe_audio_button: "Retranscribir",
        download_audio_button: "Descargar",
        delete_audio_fallback_button: "Eliminar entrada del archivo",
        confirm_delete_audio_fallback: "¿Estás seguro de que quieres eliminar esta entrada del archivo de audio?",
        REFINE_TEXT_SYSTEM_PROMPT: `Eres un redactor y corrector profesional. Revisa cuidadosamente el texto de entrada para optimizar la claridad, el estilo, la gramática, la ortografía y la puntuación. El objetivo es un texto sin errores, muy legible y estilísticamente pulido. Devuelve solo la versión revisada.`,
        KORREKTUR_SYSTEM_PROMPT: "Eres un corrector profesional. Corrige únicamente la ortografía, la puntuación y la gramática del texto de entrada. El significado y el estilo del texto no deben modificarse bajo ninguna circunstancia. Devuelve solo la versión corregida.",
        KORREKTUR_STIL_SYSTEM_PROMPT: "Eres un editor profesional. Corrige la ortografía, la puntuación y la gramática del texto de entrada. Además, optimiza el estilo del texto basándose en el contexto para mejorar la claridad, la concisión y la legibilidad, sin alterar significativamente el significado original. Devuelve solo la versión revisada.",
        SUMMARIZE_TEXT_SYSTEM_PROMPT: `Resume el siguiente texto de forma concisa y precisa. Destaca los puntos principales. Devuelve solo el resumen.`,
        TRANSLATION_SYSTEM_PROMPT_TEMPLATE: `Eres un traductor profesional altamente cualificado y con matices. Traduce el texto proporcionado con una precisión excepcional y una fluidez natural a {targetLanguageName}. Devuelve solo el texto traducido.`
    },
    zh: {
        app_title_header: "音频套件专业版",
        settings_tooltip: "设置",
        language_tooltip: "更改语言",
        theme_toggle_tooltip: "切换主题",
        audio_fallback_tooltip: "显示音频存档",
        settings_title: "设置",
        openai_api_key_label: "OpenAI API 密钥",
        api_key_placeholder_modal: "sk-...",
        save_button: "保存",
        change_button: "更改",
        api_key_status_default: "输入您的 OpenAI API 密钥。",
        api_key_status_enter_new: "输入新的 API 密钥。",
        api_key_status_saved: "当前已保存 API 密钥。",
        api_key_status_empty: "API 密钥不能为空。",
        api_key_status_removed: "API 密钥已删除。请输入新的密钥。",
        remove_api_key_button: "删除 API 密钥",
        close_button: "关闭",
        vocabulary: "词汇表",
        custom_vocabulary_title: "自定义词汇表",
        new_vocab_term_placeholder: "输入新术语...",
        add_button: "添加",
        import_txt_button: "导入 .txt",
        export_txt_button: "导出 .txt",
        term_column: "术语",
        action_column: "操作",
        no_vocabulary_message: "无可用词汇表。",
        audio_language_label: "音频语言 (ISO 639-1):",
        auto_detect_option: "自动检测",
        lang_option_de: "德语 (de)",
        lang_option_en: "英语 (en)",
        lang_option_es: "西班牙语 (es)",
        lang_option_fr: "法语 (fr)",
        lang_option_zh: "中文 (zh)",
        lang_option_ar: "阿拉伯语 (ar)",
        transcription_context_label: "转录上下文/提示:",
        transcription_context_placeholder: "例如：法律口述，技术术语",
        transcription_temperature_label: "转录温度 (0-1):",
        temperature_tooltip: "较低 (例如 0) = 更专注，较高 (例如 0.8) = 更具创造性。默认值：0。",
        start_recording_button: "开始录制",
        stop_recording_button: "停止录制 (F5)",
        upload_file_button: "上传文件",
        f5_hint: "(提示：F5 开始/停止录制)",
        recognize_speakers_checkbox: "识别说话人",
        direct_ai_improvement_checkbox: "直接 AI 改进",
        continuous_transcription_checkbox: "连续转录",
        time_tracking_dictation_checkbox: "时间跟踪口述",
        audio_level_label: "音频电平:",
        status_ready: "准备就绪。",
        status_recording: "录制中...",
        status_processing_audio: "正在处理音频...",
        status_transcribing: "正在转录音频...",
        status_transcription_error: "转录错误。",
        status_transcription_done: "转录完成。",
        status_refining_text: "正在优化文本...",
        status_summarizing_text: "正在总结文本...",
        status_translating_text: "正在翻译文本...",
        status_reading_aloud: "正在朗读文本...",
        status_tts_error: "文本转语音错误。",
        status_tts_done: "朗读完毕。",
        status_network_error: "网络错误。",
        status_api_key_missing: "需要 API 密钥。",
        transcript_text_label: "转录稿 / 文本",
        transcript_placeholder: "转录稿将显示在此处...",
        words_stats: "单词",
        characters_stats: "字符",
        copy_button: "复制",
        edit_button: "编辑",
        send_email_button: "发送到电子邮件",
        export_txt_action_button: "导出为 .txt",
        refine_text_button: "优化文本",
        text_to_vocab_button: "文本到词汇表",
        summarize_button: "总结",
        read_aloud_button: "朗读",
        delete_button: "删除",
        summary_label: "总结",
        summary_placeholder: "总结将显示在此处...",
        ai_translation_title: "AI 文本翻译",
        target_language_label: "目标语言:",
        select_language_option: "-- 选择语言 --",
        lang_translate_en_us: "英语 (美国)",
        lang_translate_de: "德语",
        lang_translate_fr: "法语",
        lang_translate_es: "西班牙语",
        lang_translate_it: "意大利语",
        lang_translate_pt_br: "葡萄牙语 (巴西)",
        lang_translate_nl: "荷兰语",
        lang_translate_pl: "波兰语",
        lang_translate_sv: "瑞典语",
        lang_translate_ru: "俄语",
        lang_translate_zh_cn: "中文 (简体)",
        lang_translate_ja: "日语",
        lang_translate_ko: "韩语",
        lang_translate_ar: "阿拉伯语",
        translate_button: "翻译",
        source_text_label: "源文本:",
        translated_text_label: "翻译后的文本:",
        translation_placeholder: "翻译将显示在此处...",
        history_title: "历史记录",
        toggle_history_tooltip: "显示/隐藏历史记录",
        hide_history_button: "隐藏历史记录",
        show_history_button: "显示历史记录",
        history_settings_tooltip: "历史记录设置",
        export_button: "导出",
        import_button: "导入",
        delete_selected_tooltip: "删除所选条目",
        delete_selection_button: "删除所选",
        clear_all_history_tooltip: "永久删除所有历史记录",
        clear_all_button: "全部清除",
        date_from_label: "从:",
        date_to_label: "到:",
        clear_date_filter_tooltip: "清除日期筛选",
        clear_filter_button: "清除筛选",
        select_all_tooltip: "选择/取消选择所有可见条目",
        select_all_label: "全选",
        search_history_placeholder: "搜索历史记录...",
        history_settings_title: "历史记录设置",
        max_history_items_label: "最大历史记录条目 (1-200):",
        cancel_button: "取消",
        confirm_button: "确认",
        lang_de: "德语",
        lang_en: "英语",
        lang_fr: "法语",
        lang_es: "西班牙语",
        lang_zh: "中文",
        lang_ar: "阿拉伯语",
        toast_no_text_to_copy: "没有可复制的文本。",
        toast_copied_to_clipboard: "文本已复制到剪贴板！",
        toast_copied_to_clipboard_fallback: "文本已复制到剪贴板！ (备用)",
        toast_copy_failed: "复制失败。请手动复制。",
        toast_no_api_key: "缺少 OpenAI API 密钥。请在设置中输入。",
        toast_api_key_saved_toast: "API 密钥保存成功！",
        toast_api_key_removed_toast: "API 密钥已删除。",
        toast_no_audio_data: "没有要处理的音频数据。",
        toast_transcription_error_api: "转录错误: ",
        toast_transcription_success: "转录成功！",
        toast_network_error_openai: "网络错误或 OpenAI API 无法访问。",
        toast_mic_access_error: "访问麦克风时出错: ",
        toast_recording_error: "录制错误。",
        toast_no_text_to_refine: "没有要优化的文本。",
        toast_refine_success: "文本优化成功！",
        toast_no_text_to_summarize: "没有要总结的文本。",
        toast_summarize_success: "文本总结成功！",
        toast_no_text_to_read: "没有要朗读的文本。",
        toast_tts_not_supported: "您的浏览器不支持文本转语音功能。",
        toast_translation_missing_info: "缺少用于翻译的文本或目标语言。",
        toast_translation_success: "文本翻译成功！",
        toast_vocab_added: "“{value}”已添加到词汇表。",
        toast_vocab_already_exists: "“{value}”已存在于词汇表中或无效。",
        toast_vocab_enter_term: "请输入一个术语。",
        toast_vocab_removed: "“{value}”已从词汇表中删除。",
        toast_vocab_import_select_txt: "请选择一个 .txt 文件。",
        toast_vocab_import_success: "已导入 {value} 个术语。",
        toast_vocab_import_no_new: "未找到要导入的新术语或术语无效。",
        toast_vocab_export_no_vocab: "没有要导出的词汇表。",
        toast_vocab_export_success: "词汇表已导出。",
        toast_no_text_for_manual_vocab: "转录稿字段中没有文本。",
        toast_manual_vocab_added: "已从文本中将 {value} 个新术语添加到词汇表。",
        toast_manual_vocab_no_new: "在文本中未找到可添加到词汇表的新术语。",
        toast_history_settings_saved: "历史记录设置已保存。",
        toast_history_settings_invalid_max: "最大条目数无效 (1-200)。",
        toast_history_entry_updated: "历史记录条目已更新。",
        toast_history_entry_deleted: "条目已删除。",
        toast_history_selection_deleted: "已删除 {value} 个条目。",
        toast_history_cleared: "历史记录已清除。",
        toast_history_empty_export: "历史记录为空。无可导出内容。",
        toast_history_export_success: "历史记录已导出。",
        toast_history_export_error: "导出历史记录时出错。",
        toast_history_import_select_json: "请选择一个 .json 文件。",
        toast_history_import_success: "历史记录导入成功。",
        toast_history_import_error: "导入历史记录时出错: {value}",
        toast_history_import_file_read_error: "读取文件时出错。",
        toast_history_date_filter_cleared: "日期筛选已清除。",
        toast_no_history_selection_to_delete: "未选择要删除的条目。",
        confirm_delete_history_all: "您确定要永久删除所有历史记录吗？",
        confirm_remove_api_key: "您确定要删除 API 密钥吗？",
        no_history_for_filter: "未找到符合您搜索/筛选条件的条目。",
        history_empty: "历史记录为空。",
        file_label: "文件",
        mb_unit: "MB",
        email_no_text: "没有可发送的文本。",
        email_subject_default: "转录文本 / 备注",
        export_txt_no_text: "没有可导出的文本。",
        export_txt_success: "转录稿已导出为 .txt。",
        export_txt_filename_prefix: "转录稿",
        history_type_transcript: "转录稿",
        history_type_transcript_continuous: "转录稿 (连续)",
        history_type_refined: "已优化",
        history_type_time_tracking: "时间跟踪",
        history_type_summary: "总结",
        history_type_translation: "翻译",
        history_type_imported: "已导入",
        theme_changed_to_light: "浅色主题已激活。",
        theme_changed_to_dark: "深色主题已激活。",
        audio_fallback_saved: "音频已保存到存档。",
        audio_fallback_db_error: "音频存档数据库错误: ",
        audio_fallback_db_init_error: "音频存档数据库初始化失败。",
        audio_fallbacks_title: "音频存档",
        no_audio_fallbacks_message: "无可用音频存档。",
        play_audio_button: "播放",
        retranscribe_audio_button: "重新转录",
        download_audio_button: "下载",
        delete_audio_fallback_button: "删除存档条目",
        confirm_delete_audio_fallback: "您确定要删除此音频存档条目吗？",
        REFINE_TEXT_SYSTEM_PROMPT: `你是一名专业的文案编辑和校对员。仔细修改输入文本，以优化清晰度、风格、语法、拼写和标点符号。目标是文本无误、可读性强且风格优美。仅输出修改后的版本。`,
        KORREKTUR_SYSTEM_PROMPT: "你是一名专业的校对员。仅更正输入文本的拼写、标点符号和语法。文本的含义和风格在任何情况下都不得更改。仅输出更正后的版本。",
        KORREKTUR_STIL_SYSTEM_PROMPT: "你是一名专业的编辑。更正输入文本的拼写、标点符号和语法。此外，根据上下文优化文本风格，以提高清晰度、简洁性和可读性，而不显著改变原始含义。仅输出修改后的版本。",
        SUMMARIZE_TEXT_SYSTEM_PROMPT: `简明扼要地总结以下文本。突出要点。仅输出总结。`,
        TRANSLATION_SYSTEM_PROMPT_TEMPLATE: `你是一位技艺高超、细致入微的专业翻译人员。请以卓越的准确性和自然的流畅度将提供的文本翻译成{targetLanguageName}。仅输出翻译后的文本。`
    },
    ar: {
        app_title_header: "مجموعة الصوت برو",
        settings_tooltip: "الإعدادات",
        language_tooltip: "تغيير اللغة",
        theme_toggle_tooltip: "تبديل السمة",
        audio_fallback_tooltip: "عرض أرشيف الصوت",
        settings_title: "الإعدادات",
        openai_api_key_label: "مفتاح API الخاص بـ OpenAI",
        api_key_placeholder_modal: "sk-...",
        save_button: "حفظ",
        change_button: "تغيير",
        api_key_status_default: "أدخل مفتاح API الخاص بـ OpenAI.",
        api_key_status_enter_new: "أدخل مفتاح API الجديد.",
        api_key_status_saved: "يوجد مفتاح API محفوظ حاليًا.",
        api_key_status_empty: "لا يمكن أن يكون مفتاح API فارغًا.",
        api_key_status_removed: "تمت إزالة مفتاح API. الرجاء إدخال مفتاح جديد.",
        remove_api_key_button: "إزالة مفتاح API",
        close_button: "إغلاق",
        vocabulary: "المفردات",
        custom_vocabulary_title: "مفردات مخصصة",
        new_vocab_term_placeholder: "أدخل مصطلحًا جديدًا...",
        add_button: "إضافة",
        import_txt_button: "استيراد .txt",
        export_txt_button: "تصدير .txt",
        term_column: "المصطلح",
        action_column: "الإجراء",
        no_vocabulary_message: "لا توجد مفردات متاحة.",
        audio_language_label: "لغة الصوت (ISO 639-1):",
        auto_detect_option: "اكتشاف تلقائي",
        lang_option_de: "الألمانية (de)",
        lang_option_en: "الإنجليزية (en)",
        lang_option_es: "الإسبانية (es)",
        lang_option_fr: "الفرنسية (fr)",
        lang_option_zh: "الصينية (zh)",
        lang_option_ar: "العربية (ar)",
        transcription_context_label: "سياق/موجه النسخ:",
        transcription_context_placeholder: "مثال: إملاء قانوني، مصطلحات فنية",
        transcription_temperature_label: "حرارة النسخ (0-1):",
        temperature_tooltip: "أقل (مثال: 0) = أكثر تركيزًا، أعلى (مثال: 0.8) = أكثر إبداعًا. الافتراضي: 0.",
        start_recording_button: "بدء التسجيل",
        stop_recording_button: "إيقاف التسجيل (F5)",
        upload_file_button: "تحميل ملف",
        f5_hint: "(نصيحة: F5 لبدء/إيقاف التسجيل)",
        recognize_speakers_checkbox: "التعرف على المتحدثين",
        direct_ai_improvement_checkbox: "تحسين مباشر بالذكاء الاصطناعي",
        continuous_transcription_checkbox: "نسخ مستمر",
        time_tracking_dictation_checkbox: "إملاء تتبع الوقت",
        audio_level_label: "مستوى الصوت:",
        status_ready: "جاهز.",
        status_recording: "جارٍ التسجيل...",
        status_processing_audio: "جارٍ معالجة الصوت...",
        status_transcribing: "جارٍ نسخ الصوت...",
        status_transcription_error: "خطأ في النسخ.",
        status_transcription_done: "اكتمل النسخ.",
        status_refining_text: "جارٍ تحسين النص...",
        status_summarizing_text: "جارٍ تلخيص النص...",
        status_translating_text: "جارٍ ترجمة النص...",
        status_reading_aloud: "جارٍ قراءة النص بصوت عالٍ...",
        status_tts_error: "خطأ في تحويل النص إلى كلام.",
        status_tts_done: "اكتملت القراءة بصوت عالٍ.",
        status_network_error: "خطأ في الشبكة.",
        status_api_key_missing: "مفتاح API مطلوب.",
        transcript_text_label: "النسخ / النص",
        transcript_placeholder: "سيظهر النسخ هنا...",
        words_stats: "كلمات",
        characters_stats: "أحرف",
        copy_button: "نسخ",
        edit_button: "تعديل",
        send_email_button: "إرسال إلى البريد الإلكتروني",
        export_txt_action_button: "تصدير كملف .txt",
        refine_text_button: "تحسين النص",
        text_to_vocab_button: "نص إلى مفردات",
        summarize_button: "تلخيص",
        read_aloud_button: "قراءة بصوت عالٍ",
        delete_button: "حذف",
        summary_label: "الملخص",
        summary_placeholder: "سيظهر الملخص هنا...",
        ai_translation_title: "ترجمة النصوص بالذكاء الاصطناعي",
        target_language_label: "اللغة الهدف:",
        select_language_option: "-- اختر اللغة --",
        lang_translate_en_us: "الإنجليزية (الولايات المتحدة)",
        lang_translate_de: "الألمانية",
        lang_translate_fr: "الفرنسية",
        lang_translate_es: "الإسبانية",
        lang_translate_it: "الإيطالية",
        lang_translate_pt_br: "البرتغالية (البرازيل)",
        lang_translate_nl: "الهولندية",
        lang_translate_pl: "البولندية",
        lang_translate_sv: "السويدية",
        lang_translate_ru: "الروسية",
        lang_translate_zh_cn: "الصينية (المبسطة)",
        lang_translate_ja: "اليابانية",
        lang_translate_ko: "الكورية",
        lang_translate_ar: "العربية",
        translate_button: "ترجمة",
        source_text_label: "النص المصدر:",
        translated_text_label: "النص المترجم:",
        translation_placeholder: "ستظهر الترجمة هنا...",
        history_title: "السجل",
        toggle_history_tooltip: "إظهار/إخفاء السجل",
        hide_history_button: "إخفاء السجل",
        show_history_button: "إظهار السجل",
        history_settings_tooltip: "إعدادات السجل",
        export_button: "تصدير",
        import_button: "استيراد",
        delete_selected_tooltip: "حذف الإدخالات المحددة",
        delete_selection_button: "حذف التحديد",
        clear_all_history_tooltip: "حذف جميع السجلات نهائيًا",
        clear_all_button: "مسح الكل",
        date_from_label: "من:",
        date_to_label: "إلى:",
        clear_date_filter_tooltip: "مسح مرشح التاريخ",
        clear_filter_button: "مسح المرشح",
        select_all_tooltip: "تحديد/إلغاء تحديد جميع الإدخالات المرئية",
        select_all_label: "تحديد الكل",
        search_history_placeholder: "بحث في السجل...",
        history_settings_title: "إعدادات السجل",
        max_history_items_label: "الحد الأقصى لإدخالات السجل (1-200):",
        cancel_button: "إلغاء",
        confirm_button: "تأكيد",
        lang_de: "الألمانية",
        lang_en: "الإنجليزية",
        lang_fr: "الفرنسية",
        lang_es: "الإسبانية",
        lang_zh: "الصينية",
        lang_ar: "العربية",
        toast_no_text_to_copy: "لا يوجد نص لنسخه.",
        toast_copied_to_clipboard: "تم نسخ النص إلى الحافظة!",
        toast_copied_to_clipboard_fallback: "تم نسخ النص إلى الحافظة! (احتياطي)",
        toast_copy_failed: "فشل النسخ. يرجى النسخ يدويًا.",
        toast_no_api_key: "مفتاح API الخاص بـ OpenAI مفقود. يرجى إدخاله في الإعدادات.",
        toast_api_key_saved_toast: "تم حفظ مفتاح API بنجاح!",
        toast_api_key_removed_toast: "تمت إزالة مفتاح API.",
        toast_no_audio_data: "لا توجد بيانات صوتية للمعالجة.",
        toast_transcription_error_api: "خطأ في النسخ: ",
        toast_transcription_success: "اكتمل النسخ بنجاح!",
        toast_network_error_openai: "خطأ في الشبكة أو تعذر الوصول إلى واجهة برمجة تطبيقات OpenAI.",
        toast_mic_access_error: "خطأ في الوصول إلى الميكروفون: ",
        toast_recording_error: "خطأ في التسجيل.",
        toast_no_text_to_refine: "لا يوجد نص لتحسينه.",
        toast_refine_success: "تم تحسين النص بنجاح!",
        toast_no_text_to_summarize: "لا يوجد نص لتلخيصه.",
        toast_summarize_success: "تم تلخيص النص بنجاح!",
        toast_no_text_to_read: "لا يوجد نص لقراءته بصوت عالٍ.",
        toast_tts_not_supported: "متصفحك لا يدعم تحويل النص إلى كلام.",
        toast_translation_missing_info: "النص أو اللغة الهدف للترجمة مفقودان.",
        toast_translation_success: "تمت ترجمة النص بنجاح!",
        toast_vocab_added: "تمت إضافة \"{value}\" إلى المفردات.",
        toast_vocab_already_exists: "\"{value}\" موجود بالفعل في المفردات أو غير صالح.",
        toast_vocab_enter_term: "الرجاء إدخال مصطلح.",
        toast_vocab_removed: "تمت إزالة \"{value}\" من المفردات.",
        toast_vocab_import_select_txt: "الرجاء تحديد ملف .txt.",
        toast_vocab_import_success: "تم استيراد {value} مصطلح (مصطلحات).",
        toast_vocab_import_no_new: "لم يتم العثور على مصطلحات جديدة للاستيراد أو كانت المصطلحات غير صالحة.",
        toast_vocab_export_no_vocab: "لا توجد مفردات للتصدير.",
        toast_vocab_export_success: "تم تصدير المفردات.",
        toast_no_text_for_manual_vocab: "لا يوجد نص في حقل النسخ.",
        toast_manual_vocab_added: "تمت إضافة {value} مصطلح (مصطلحات) جديد (ة) إلى المفردات من النص.",
        toast_manual_vocab_no_new: "لم يتم العثور على مصطلحات جديدة في النص لإضافتها إلى المفردات.",
        toast_history_settings_saved: "تم حفظ إعدادات السجل.",
        toast_history_settings_invalid_max: "قيمة غير صالحة للحد الأقصى للإدخالات (1-200).",
        toast_history_entry_updated: "تم تحديث إدخال السجل.",
        toast_history_entry_deleted: "تم حذف الإدخال.",
        toast_history_selection_deleted: "تم حذف {value} إدخال (إدخالات).",
        toast_history_cleared: "تم مسح السجل.",
        toast_history_empty_export: "السجل فارغ. لا شيء للتصدير.",
        toast_history_export_success: "تم تصدير السجل.",
        toast_history_export_error: "خطأ في تصدير السجل.",
        toast_history_import_select_json: "الرجاء تحديد ملف .json.",
        toast_history_import_success: "تم استيراد السجل بنجاح.",
        toast_history_import_error: "خطأ في استيراد السجل: {value}",
        toast_history_import_file_read_error: "خطأ في قراءة الملف.",
        toast_history_date_filter_cleared: "تم مسح مرشح التاريخ.",
        toast_no_history_selection_to_delete: "لم يتم تحديد أي إدخالات للحذف.",
        confirm_delete_history_all: "هل أنت متأكد أنك تريد حذف جميع السجلات نهائيًا؟",
        confirm_remove_api_key: "هل أنت متأكد أنك تريد إزالة مفتاح API؟",
        no_history_for_filter: "لم يتم العثور على أي إدخالات لبحثك/مرشحك.",
        history_empty: "السجل فارغ.",
        file_label: "ملف",
        mb_unit: "ميجابايت",
        email_no_text: "لا يوجد نص لإرساله.",
        email_subject_default: "نص منسوخ / ملاحظة",
        export_txt_no_text: "لا يوجد نص للتصدير.",
        export_txt_success: "تم تصدير النسخ كملف .txt.",
        export_txt_filename_prefix: "نسخ",
        history_type_transcript: "نسخ",
        history_type_transcript_continuous: "نسخ (مستمر)",
        history_type_refined: "محسن",
        history_type_time_tracking: "تتبع الوقت",
        history_type_summary: "ملخص",
        history_type_translation: "ترجمة",
        history_type_imported: "مستورد",
        theme_changed_to_light: "تم تفعيل السمة الفاتحة.",
        theme_changed_to_dark: "تم تفعيل السمة الداكنة.",
        audio_fallback_saved: "تم حفظ الصوت في الأرشيف.",
        audio_fallback_db_error: "خطأ في قاعدة بيانات أرشيف الصوت: ",
        audio_fallback_db_init_error: "فشل تهيئة قاعدة بيانات أرشيف الصوت.",
        audio_fallbacks_title: "أرشيف الصوت",
        no_audio_fallbacks_message: "لا يوجد أرشيف صوتي متاح.",
        play_audio_button: "تشغيل",
        retranscribe_audio_button: "إعادة النسخ",
        download_audio_button: "تنزيل",
        delete_audio_fallback_button: "حذف إدخال الأرشيف",
        confirm_delete_audio_fallback: "هل أنت متأكد أنك تريد حذف إدخال الأرشيف الصوتي هذا؟",
        REFINE_TEXT_SYSTEM_PROMPT: `أنت محرر نسخ ومدقق لغوي محترف. قم بمراجعة النص المدخل بعناية لتحسين الوضوح والأسلوب والقواعد النحوية والإملائية وعلامات الترقيم. الهدف هو نص خالٍ من الأخطاء وسهل القراءة ومصقول من الناحية الأسلوبية. أخرج النسخة المنقحة فقط.`,
        KORREKTUR_SYSTEM_PROMPT: "أنت مدقق لغوي محترف. قم بتصحيح الإملاء وعلامات الترقيم والقواعد النحوية للنص المدخل فقط. يجب عدم تغيير معنى النص وأسلوبه تحت أي ظرف من الظروف. أخرج النسخة المصححة فقط.",
        KORREKTUR_STIL_SYSTEM_PROMPT: "أنت محرر محترف. قم بتصحيح الإملاء وعلامات الترقيم والقواعد النحوية للنص المدخل. بالإضافة إلى ذلك، قم بتحسين أسلوب النص بناءً على السياق لتحسين الوضوح والإيجاز وسهولة القراءة، دون تغيير المعنى الأصلي بشكل كبير. أخرج النسخة المنقحة فقط.",
        SUMMARIZE_TEXT_SYSTEM_PROMPT: `لخص النص التالي بإيجاز ودقة. سلط الضوء على النقاط الرئيسية. أخرج الملخص فقط.`,
        TRANSLATION_SYSTEM_PROMPT_TEMPLATE: `أنت مترجم محترف يتمتع بمهارات عالية وفهم دقيق للفروق اللغوية. قم بترجمة النص المقدم بدقة فائقة وسلاسة طبيعية إلى {targetLanguageName}. أخرج النص المترجم فقط.`
    }
};
// --- System Prompts (global variables to be updated by setLanguage) ---
let REFINE_TEXT_SYSTEM_PROMPT = translations.de.REFINE_TEXT_SYSTEM_PROMPT;
let KORREKTUR_SYSTEM_PROMPT = translations.de.KORREKTUR_SYSTEM_PROMPT;
let KORREKTUR_STIL_SYSTEM_PROMPT = translations.de.KORREKTUR_STIL_SYSTEM_PROMPT;
let TRANSLATION_SYSTEM_PROMPT_TEMPLATE = translations.de.TRANSLATION_SYSTEM_PROMPT_TEMPLATE;
let SUMMARIZE_TEXT_SYSTEM_PROMPT = translations.de.SUMMARIZE_TEXT_SYSTEM_PROMPT;
const ZEITERFASSUNG_SYSTEM_PROMPT_DE = `Ziel: Höchste Präzision und Effizienz bei der Zeiterfassung, welche den internationalen Kanzleistandards in Deutschland entspricht. Fehlerfreiheit, Konsistenz und professionelle Struktur sind essenziell, um die wertvolle Zeit des Nutzers optimal zu dokumentieren. Verarbeite die transkribierten Zeiteinträge mit maximaler Präzision und Effizienz. Erstelle strukturierte Tabellen, die vollständig kompatibel mit LEXolution.TIME Pro sind. Ergänze Wochentage automatisch im Format „TT.MM.JJ (Wochentag)“ und kennzeichne fehlende Zeitangaben zum Nachtragen. Stelle sicher, dass Eigennamen, Mandantennamen und Fachbegriffe konsistent verwendet werden. Nutze eine persistente Liste zur Speicherung und Abfrage neuer Begriffe. Frage bei abweichenden Schreibweisen aktiv nach, ob diese dauerhaft übernommen werden sollen. Formatiere das Ergebnis so, dass es leicht in CSV- oder Excel-Format überführt werden kann, mit dynamischer Zellbreitenanpassung im Sinn. Füge nach jedem Tag die Tagessumme ein und am Ende die Gesamtsumme. Achte auf eine klare, übersichtliche Formatierung gemäß internationalen Kanzleistandards. Wende die neuesten Erkenntnisse des Prompt Engineerings an, um Effizienz und Genauigkeit zu maximieren. Alle Zeiteinträge beziehen sich auf das zuletzt genannte Datum, bis ein neues Datum ausdrücklich genannt wird. Für jedes Mandat und jeden Tag wird ein Eintrag erstellt, der alle Aktivitäten und Zeiten bündelt. Mehrere Aktivitäten für dasselbe Mandat am selben Tag werden durch Semikolons getrennt. Fehlen Zeitangaben, bleiben die Felder leer. Die ursprüngliche Reihenfolge der Einträge wird beibehalten.`;
const ZEITERFASSUNG_SYSTEM_PROMPT_EN = `Goal: Maximum precision and efficiency in time tracking, compliant with international law firm standards in Germany. Accuracy, consistency, and professional structure are essential to optimally document the user's valuable time. Process the transcribed time entries with maximum precision and efficiency. Create structured tables fully compatible with LEXolution.TIME Pro. Automatically add weekdays in the format "DD.MM.YY (Weekday)" and mark missing time entries for later completion. Ensure consistent use of proper names, client names, and technical terms. Use a persistent list to store and query new terms. Actively inquire about differing spellings to determine if they should be permanently adopted. Format the result for easy conversion to CSV or Excel, keeping dynamic cell width adjustment in mind. Insert a daily total after each day and a grand total at the end. Ensure clear, organized formatting according to international law firm standards. Apply the latest prompt engineering insights to maximize efficiency and accuracy. All time entries refer to the last mentioned date until a new date is explicitly stated. An entry is created for each client and each day, bundling all activities and times. Multiple activities for the same client on the same day are separated by semicolons. If time entries are missing, the fields remain empty. The original order of entries is maintained.`;


const OPENAI_TRANSCRIPTION_URL = 'https://api.openai.com/v1/audio/transcriptions';
const OPENAI_CHAT_COMPLETIONS_URL = 'https://api.openai.com/v1/chat/completions';

// --- DOM Elements ---
/**
 * Shortcut for document.getElementById.
 * @param {string} id - The ID of the DOM element.
 * @returns {HTMLElement | null} The DOM element or null if not found.
 */
const $ = id => document.getElementById(id);

const themeToggleButton = $('theme-toggle-button');
const chkTimeTracking = $('chk-time-tracking');
const btnRecord = $('btn-record'), recordLabel = $('record-label');
const btnCopy = $('btn-copy'), btnRefine = $('btn-refine'), btnClear = $('btn-clear');
const btnAddManualVocab = $('btn-add-manual-vocab');
const btnSummarize = $('btn-summarize'), btnTts = $('btn-tts');
const btnTranslate = $('btn-translate');
const txtTranscript = $('txt-transcript'), txtSource = $('txt-source'), txtTranslated = $('txt-translated');
const txtSummary = $('txt-summary'), summarizeSection = $('summarize-section');
const selectLang = $('select-lang'), inputPrompt = $('input-prompt');
const inputTemperature = $('input-temperature');
const chkDiarize = $('chk-diarize'), chkAutoRefine = $('chk-auto-refine'), chkContinuous = $('chk-continuous');
const selectTranslateLang = $('select-translate-lang');
const statusText = $('status-text'), statusLoader = $('status-loader');
const audioVisContainer = $('audioVisualizerContainer'), audioVis = $('audioVisualizer');
const textStats = $('text-stats');
const btnSendEmail = $('btn-send-email');
const btnExportTxt = $('btn-export-txt');
const btnSettingsOpen = $('btn-settings-open');
const settingsModal = $('settings-modal');
const btnSettingsCloseModalX = $('btn-settings-close-modal');
const btnSettingsModalCloseFooter = $('btn-settings-modal-close-footer');
const modalInputApiKey = $('modal-input-api-key');
const modalBtnKeySave = $('modal-btn-key-save');
const modalKeyStatus = $('modal-key-status');
const modalBtnKeyRemove = $('modal-btn-key-remove');
const apiKeyStatusDot = $('api-key-status-dot');
const btnLanguageToggle = $('btn-language-toggle');
const languageDropdownMenu = $('language-dropdown-menu');
const langOptions = document.querySelectorAll('.lang-option');
const btnVocabOpen = $('btn-vocab-open');
const vocabModal = $('vocab-modal');
const btnVocabCloseModalX = $('btn-vocab-close-modal-x');
const btnVocabModalCloseFooter = $('btn-vocab-modal-close-footer');
const newVocabTermInput = $('new-vocab-term');
const btnAddVocabTerm = $('btn-add-vocab-term');
const vocabFileImportInput = $('vocab-file-import');
const btnVocabImportTxt = $('btn-vocab-import-txt');
const btnVocabExportTxt = $('btn-vocab-export-txt');
const vocabTableBody = $('vocab-table-body');
const vocabTableEmptyMsg = $('vocab-table-empty-msg');
const fileUpload = $('file-upload'), fileNameDisplay = $('file-name');
const toastNotification = $('toast-notification');
const f5HintElement = $('f5-hint');
const btnToggleHistory = $('btn-toggle-history'), toggleHistoryLabel = $('toggle-history-label');
const historyPanelContent = $('history-panel-content');
const clipboardHistoryListDiv = $('clipboardHistoryList');
const historySearchInput = $('historySearchInput');
const selectAllHistoryCheckbox = $('selectAllHistoryCheckbox');
const deleteSelectedHistoryButton = $('deleteSelectedHistoryButton');
const clearHistoryButton = $('clearHistoryButton');
const exportHistoryButton = $('exportHistoryButton');
const importHistoryFileInput = $('importHistoryFile');
const importHistoryFileLabel = $('importHistoryFileLabel');
const dateFilterFromInput = $('dateFilterFrom');
const dateFilterToInput = $('dateFilterTo');
const clearDateFilterButton = $('clearDateFilterButton');
const btnHistorySettings = $('btn-history-settings');
const historySettingsModal = $('history-settings-modal');
const btnHistorySettingsCloseModalX = $('btn-history-settings-close-modal-x');
const btnHistorySettingsModalCloseFooter = $('btn-history-settings-modal-close-footer');
const maxHistoryItemsInput = $('maxHistoryItemsInput');
const btnHistorySettingsSave = $('btn-history-settings-save');

// Audio Fallback Modal Elements
const btnAudioFallbackOpen = $('btn-audio-fallback-open');
const audioFallbackModal = $('audio-fallback-modal');
const btnAudioFallbackCloseModalX = $('btn-audio-fallback-close-modal-x');
const btnAudioFallbackModalCloseFooter = $('btn-audio-fallback-modal-close-footer');
const audioFallbackListDiv = $('audio-fallback-list');
const audioFallbackEmptyMsg = $('audio-fallback-empty-msg');


// --- State Variables ---
let OPENAI_KEY = '';
let mediaRecorder, audioChunks = [], audioContext, analyser, sourceNode, isRecording = false;
const visualizerBars = []; 
let currentAudioBlob = null; 
let userVocabulary = []; 
let currentLanguage = 'de'; 
let currentTheme = 'dark-theme'; 

let clipboardHistory = []; 
let currentlyDisplayedHistory = []; 
let selectedHistoryItemIds = new Set(); 
let editingHistoryItemId = null; 
const MAX_HISTORY_ITEMS_DEFAULT = 50; 
let MAX_HISTORY_ITEMS = MAX_HISTORY_ITEMS_DEFAULT; 

// --- IndexedDB für Audio-Fallbacks ---
let fallbackDB; 
const FALLBACK_DB_NAME = 'AudioSuiteFallbacksDB';
const FALLBACK_STORE_NAME = 'audioFallbacks';
const FALLBACK_DB_VERSION = 1;
const MAX_AUDIO_FALLBACKS = 5; 

// --- Theme Management ---
/**
 * Applies the selected theme to the application.
 * @param {string} theme - The theme to apply ('light-theme' or 'dark-theme').
 */
function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
    currentTheme = theme;
    localStorage.setItem('AUDIO_SUITE_THEME', theme); 
    updateThemeToggleIcon(theme); 
}

/**
 * Updates the theme toggle button icon based on the current theme.
 * @param {string} theme - The current theme.
 */
function updateThemeToggleIcon(theme) {
    const moonIcon = themeToggleButton.querySelector('.fa-moon');
    const sunIcon = themeToggleButton.querySelector('.fa-sun');
    if (theme === 'light-theme') {
        if(moonIcon) moonIcon.style.display = 'none';
        if(sunIcon) sunIcon.style.display = 'inline-block';
    } else {
        if(moonIcon) moonIcon.style.display = 'inline-block';
        if(sunIcon) sunIcon.style.display = 'none';
    }
    translateElement(themeToggleButton, 'theme_toggle_tooltip', 'title'); 
}

/**
 * Toggles between light and dark themes.
 */
function toggleTheme() {
    const newTheme = document.body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
    applyTheme(newTheme);
    const toastMessageKey = newTheme === 'light-theme' ? 'theme_changed_to_light' : 'theme_changed_to_dark';
    showToast(toastMessageKey, 'info', 2000); 
}

themeToggleButton.addEventListener('click', toggleTheme);


// --- Language Functions ---
/**
 * Populates the audio language selection dropdown with UI languages.
 */
function populateAudioLanguageOptions() {
    const existingOptions = Array.from(selectLang.options).map(opt => opt.value);
    const uiLanguages = { 
        'de': 'lang_option_de',
        'en': 'lang_option_en',
        'fr': 'lang_option_fr',
        'es': 'lang_option_es',
        'zh': 'lang_option_zh',
        'ar': 'lang_option_ar'
    };

    for (const langCode in uiLanguages) {
        if (!existingOptions.includes(langCode)) { 
            const option = document.createElement('option');
            option.value = langCode;
            selectLang.appendChild(option);
        }
    }
}

/**
 * Translates a given UI element.
 * @param {HTMLElement} element - The DOM element to translate.
 * @param {string} key - The translation key.
 * @param {string} [attr='textContent'] - The attribute to set (e.g., 'textContent', 'placeholder', 'title').
 */
function translateElement(element, key, attr = 'textContent') {
    try {
        const translation = translations[currentLanguage]?.[key] || translations.en?.[key] || `[${key}]`; 
        if (element) {
            if (attr === 'placeholder') element.placeholder = translation;
            else if (attr === 'title') element.title = translation;
            else element.textContent = translation;
        }
    } catch (error) {
        console.error(`Error translating element with key "${key}" for language "${currentLanguage}":`, error);
        if(element && attr === 'textContent') element.textContent = `[${key}]`; // Fallback to key if error
    }
}

/**
 * Sets the application language and updates all translatable UI elements.
 * @param {string} lang - The language code (e.g., 'de', 'en').
 */
function setLanguage(lang) {
    try {
        currentLanguage = lang;
        localStorage.setItem('AUDIO_SUITE_LANGUAGE', lang); 
        document.documentElement.lang = lang; 
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; 

        // Translate elements with data attributes
        document.querySelectorAll('[data-translate]').forEach(el => translateElement(el, el.dataset.translate));
        document.querySelectorAll('[data-translate-placeholder]').forEach(el => translateElement(el, el.dataset.translatePlaceholder, 'placeholder'));
        document.querySelectorAll('[data-translate-title]').forEach(el => translateElement(el, el.dataset.translateTitle, 'title'));
        
        // Translate audio language select options
        Array.from(selectLang.options).forEach(option => {
            if (option.value === "") { 
                translateElement(option, 'auto_detect_option');
            } else {
                const langKey = `lang_option_${option.value}`; 
                const translatedText = translations[currentLanguage]?.[langKey] || translations.en?.[langKey] || `${option.value.toUpperCase()} (${option.value})`;
                option.textContent = translatedText;
            }
        });

        // Update system prompt variables based on the selected language
        const langPrompts = translations[lang] || translations.de; 
        REFINE_TEXT_SYSTEM_PROMPT = langPrompts.REFINE_TEXT_SYSTEM_PROMPT || translations.de.REFINE_TEXT_SYSTEM_PROMPT;
        KORREKTUR_SYSTEM_PROMPT = langPrompts.KORREKTUR_SYSTEM_PROMPT || translations.de.KORREKTUR_SYSTEM_PROMPT;
        KORREKTUR_STIL_SYSTEM_PROMPT = langPrompts.KORREKTUR_STIL_SYSTEM_PROMPT || translations.de.KORREKTUR_STIL_SYSTEM_PROMPT;
        TRANSLATION_SYSTEM_PROMPT_TEMPLATE = langPrompts.TRANSLATION_SYSTEM_PROMPT_TEMPLATE || translations.de.TRANSLATION_SYSTEM_PROMPT_TEMPLATE;
        SUMMARIZE_TEXT_SYSTEM_PROMPT = langPrompts.SUMMARIZE_TEXT_SYSTEM_PROMPT || translations.de.SUMMARIZE_TEXT_SYSTEM_PROMPT;

        // Update language switcher UI
        langOptions.forEach(opt => opt.classList.toggle('active', opt.dataset.lang === lang));
        if (languageDropdownMenu) languageDropdownMenu.classList.remove('open');

        // Refresh UI elements that depend on language
        updateButtonStates();
        if (recordLabel) {
             recordLabel.textContent = isRecording 
                ? (translations[currentLanguage]?.stop_recording_button || translations.en.stop_recording_button)
                : (translations[currentLanguage]?.start_recording_button || translations.en.start_recording_button);
        }
        
        loadApiKey(); 
        renderHistoryItems(currentlyDisplayedHistory); 
        renderVocabularyTable(); 
        updateThemeToggleIcon(currentTheme); 
    } catch (error) {
        console.error("Critical error during setLanguage execution:", error);
        // Display a user-friendly message if possible, though the UI might be broken
        if(statusText) statusText.textContent = "Ein kritischer Fehler ist aufgetreten. Bitte laden Sie die Seite neu.";
    }
}

// --- Helper Functions ---
/**
 * Displays a toast notification.
 * @param {string} messageKey - The translation key for the message.
 * @param {'info' | 'success' | 'error'} [type='info'] - The type of toast.
 * @param {number} [duration=3500] - How long the toast is displayed in ms.
 * @param {string | number | null} [interpolateValue=null] - A value to interpolate into the message.
 */
function showToast(messageKey, type = 'info', duration = 3500, interpolateValue = null) {
    let message = translations[currentLanguage]?.[messageKey] || translations.en?.[messageKey] || messageKey;
    if (interpolateValue !== null) {
        message = message.replace('{value}', interpolateValue.toString()); 
    }
    toastNotification.textContent = message;
    toastNotification.className = 'toast'; // Reset classes
    toastNotification.classList.add(type, 'show'); 
    setTimeout(() => toastNotification.classList.remove('show'), duration); 
}

/**
 * Gets the human-readable name of a language code.
 * @param {string} code - The language code (e.g., 'en-US', 'de').
 * @returns {string} The translated language name or the code itself if not found.
 */
function getLanguageName(code) {
  const langMap = { 
    "en-US": translations[currentLanguage]?.lang_translate_en_us || "English (US)",
    "de": translations[currentLanguage]?.lang_translate_de || "German",
    "fr": translations[currentLanguage]?.lang_translate_fr || "French",
    "es": translations[currentLanguage]?.lang_translate_es || "Spanish",
    "it": translations[currentLanguage]?.lang_translate_it || "Italian",
    "pt-BR": translations[currentLanguage]?.lang_translate_pt_br || "Portuguese (BR)",
    "nl": translations[currentLanguage]?.lang_translate_nl || "Dutch",
    "pl": translations[currentLanguage]?.lang_translate_pl || "Polish",
    "sv": translations[currentLanguage]?.lang_translate_sv || "Swedish",
    "ru": translations[currentLanguage]?.lang_translate_ru || "Russian",
    "zh-CN": translations[currentLanguage]?.lang_translate_zh_cn || "Chinese (Simplified)",
    "ja": translations[currentLanguage]?.lang_translate_ja || "Japanese",
    "ko": translations[currentLanguage]?.lang_translate_ko || "Korean",
    "ar": translations[currentLanguage]?.lang_translate_ar || "Arabic"
  };
  return langMap[code] || code; 
}

/**
 * Copies text to the clipboard, with a fallback mechanism.
 * @param {string} text - The text to copy.
 * @param {string} [successMessageKey='toast_copied_to_clipboard'] - Translation key for success message.
 */
function copyTextToClipboard(text, successMessageKey = 'toast_copied_to_clipboard') {
    if (!text || text.trim() === "") {
        showToast('toast_no_text_to_copy', 'info');
        return;
    }
    navigator.clipboard.writeText(text)
        .then(() => showToast(successMessageKey, 'success'))
        .catch(err => { 
            console.warn("Clipboard copy failed (navigator.clipboard), trying fallback:", err);
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed"; 
            textArea.style.top = "-9999px"; 
            textArea.style.left = "-9999px";
            textArea.style.opacity = "0"; 
            document.body.appendChild(textArea);
            textArea.focus(); 
            textArea.select();
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    showToast('toast_copied_to_clipboard_fallback', 'success');
                } else {
                    throw new Error('document.execCommand("copy") failed');
                }
            } catch (execErr) {
                console.error('Fallback copy failed:', execErr);
                showToast('toast_copy_failed', 'error');
            }
            document.body.removeChild(textArea);
        });
}

/**
 * Updates the word and character count display for the main transcript.
 */
function updateTextStats() {
    const text = txtTranscript.value;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const charCount = text.length;
    const wordsLabel = translations[currentLanguage]?.words_stats || translations.en.words_stats;
    const charsLabel = translations[currentLanguage]?.characters_stats || translations.en.characters_stats;
    textStats.textContent = `${wordsLabel}: ${wordCount} | ${charsLabel}: ${charCount}`;
}


// --- UI Update Functions ---
/**
 * Updates the enabled/disabled state of various action buttons based on text content.
 */
function updateButtonStates() {
  const hasText = txtTranscript.value.trim() !== '';
  [btnCopy, btnRefine, btnClear, btnSummarize, btnTts, btnAddManualVocab, btnSendEmail, btnExportTxt].forEach(btn => {
      if (btn) btn.disabled = !hasText;
  });
  
  if (btnTranslate) btnTranslate.disabled = !(hasText && selectTranslateLang.value);
  
  if (txtSource) txtSource.value = txtTranscript.value; 
  updateTextStats(); 
}

/**
 * Sets the status message and loading indicator visibility.
 * @param {string} statusKey - The translation key for the status message.
 * @param {boolean} [isLoading=false] - Whether to show the loading indicator.
 */
function setStatus(statusKey, isLoading = false) {
    try {
        statusText.textContent = translations[currentLanguage]?.[statusKey] || translations.en?.[statusKey] || statusKey;
        statusText.className = 'italic text-base'; // Reset classes
        if (statusKey.includes('error') || statusKey.includes('missing') || statusKey.includes('Fehler')) {
            statusText.classList.add('text-rose-500'); 
        } else {
            statusText.classList.add('text-[color:var(--text-secondary)]'); 
        }
        statusLoader.classList.toggle('hidden', !isLoading); 
        
        if (btnRecord) btnRecord.disabled = isLoading;
        const fileUploadLabel = document.querySelector('label[for="file-upload"]');
        if (fileUploadLabel) {
            fileUploadLabel.classList.toggle('opacity-60', isLoading);
            fileUploadLabel.classList.toggle('cursor-not-allowed', isLoading);
        }
        if (fileUpload) fileUpload.disabled = isLoading;
    } catch (error) {
        console.error("Error in setStatus:", error);
    }
}

/**
 * Updates the visual indicator for the API key status (dot in the header).
 */
function updateApiKeyStatusIndicator() {
    const settingsTooltipKey = 'settings_tooltip';
    const tooltipText = translations[currentLanguage]?.[settingsTooltipKey] || translations.en?.[settingsTooltipKey] || "Settings";
    if (OPENAI_KEY) { 
        apiKeyStatusDot.classList.remove('missing'); apiKeyStatusDot.classList.add('set');
    } else { 
        apiKeyStatusDot.classList.remove('set'); apiKeyStatusDot.classList.add('missing');
    }
    apiKeyStatusDot.title = tooltipText + (OPENAI_KEY ? ` (${translations[currentLanguage]?.api_key_status_saved || "Key saved"})` : ` (${translations[currentLanguage]?.api_key_status_default || "Key missing"})`);
}

// --- API Key Management (Modal) ---
/**
 * Loads the OpenAI API key from localStorage and updates the settings modal UI.
 */
function loadApiKey() {
    OPENAI_KEY = localStorage.getItem('OPENAI_API_KEY_AUDIO_SUITE') || '';
    const currentLang = currentLanguage || 'de'; 

    if (OPENAI_KEY) { 
        modalInputApiKey.value = ''; 
        modalInputApiKey.placeholder = '••••••••••••••••••••••••'; 
        modalInputApiKey.readOnly = true; 
        modalBtnKeySave.textContent = translations[currentLang]?.change_button || translations.en.change_button; 
        modalKeyStatus.textContent = translations[currentLang]?.api_key_status_saved || translations.en.api_key_status_saved; 
        modalKeyStatus.className = 'mt-2.5 text-xs text-emerald-400'; 
        modalBtnKeyRemove.classList.remove('hidden'); 
    } else { 
        modalInputApiKey.value = '';
        modalInputApiKey.placeholder = translations[currentLang]?.api_key_placeholder_modal || translations.en.api_key_placeholder_modal;
        modalInputApiKey.readOnly = false;
        modalBtnKeySave.textContent = translations[currentLang]?.save_button || translations.en.save_button; 
        modalKeyStatus.textContent = translations[currentLang]?.api_key_status_default || translations.en.api_key_status_default;
        modalKeyStatus.className = 'mt-2.5 text-xs text-amber-400'; 
        modalBtnKeyRemove.classList.add('hidden'); 
    }
    updateApiKeyStatusIndicator(); 
}

modalBtnKeySave.onclick = () => {
    const currentLang = currentLanguage || 'de';
    if (modalBtnKeySave.textContent === (translations[currentLang]?.change_button || translations.en.change_button)) {
        modalInputApiKey.readOnly = false;
        modalInputApiKey.value = '';
        modalInputApiKey.placeholder = translations[currentLang]?.api_key_status_enter_new || translations.en.api_key_status_enter_new;
        modalInputApiKey.focus();
        modalBtnKeySave.textContent = translations[currentLang]?.save_button || translations.en.save_button;
        modalKeyStatus.textContent = translations[currentLang]?.api_key_status_enter_new || translations.en.api_key_status_enter_new;
        modalKeyStatus.className = 'mt-2.5 text-xs text-sky-300';
    } else {
        const potentialKey = modalInputApiKey.value.trim();
        if (potentialKey) {
            OPENAI_KEY = potentialKey;
            localStorage.setItem('OPENAI_API_KEY_AUDIO_SUITE', OPENAI_KEY);
            showToast('toast_api_key_saved_toast', 'success');
            loadApiKey(); 
        } else { 
            modalKeyStatus.textContent = translations[currentLang]?.api_key_status_empty || translations.en.api_key_status_empty;
            modalKeyStatus.className = 'mt-2.5 text-xs text-red-400';
        }
    }
    updateApiKeyStatusIndicator(); 
};

modalBtnKeyRemove.onclick = () => {
    showConfirmationModal("confirm_remove_api_key", () => { 
        OPENAI_KEY = '';
        localStorage.removeItem('OPENAI_API_KEY_AUDIO_SUITE');
        showToast('toast_api_key_removed_toast', 'info');
        loadApiKey(); 
    });
};

const openSettingsModal = () => { loadApiKey(); settingsModal.classList.add('open'); }
const closeSettingsModal = () => { settingsModal.classList.remove('open'); loadApiKey(); }
btnSettingsOpen.onclick = openSettingsModal;
btnSettingsCloseModalX.onclick = closeSettingsModal;
btnSettingsModalCloseFooter.onclick = closeSettingsModal;

// --- Vocabulary Management ---
function loadUserVocabulary() {
    const storedVocabArray = localStorage.getItem('USER_VOCAB_ARRAY_AUDIO_SUITE');
    userVocabulary = storedVocabArray ? JSON.parse(storedVocabArray) : [];
    renderVocabularyTable(); 
}

function saveUserVocabulary() {
    localStorage.setItem('USER_VOCAB_ARRAY_AUDIO_SUITE', JSON.stringify(userVocabulary));
    localStorage.setItem('USER_VOCAB_OPENAI_PROMPT_STRING', userVocabulary.join('. '));
}

function renderVocabularyTable() {
    vocabTableBody.innerHTML = ''; 
    vocabTableEmptyMsg.classList.toggle('hidden', userVocabulary.length > 0); 
    translateElement(vocabTableEmptyMsg, 'no_vocabulary_message'); 

    userVocabulary.forEach((term, index) => { 
        const tr = document.createElement('tr');
        tr.className = "border-b transition-colors";
        tr.style.borderColor = "var(--border-primary)";
        tr.onmouseover = () => tr.style.backgroundColor = "var(--history-item-hover-bg)";
        tr.onmouseout = () => tr.style.backgroundColor = "";

        const tdTerm = document.createElement('td'); 
        tdTerm.className = 'px-4 py-2.5 whitespace-normal break-all';
        tdTerm.textContent = term;
        const tdAction = document.createElement('td'); 
        tdAction.className = 'px-4 py-2.5 text-right';
        const deleteButton = document.createElement('button'); 
        deleteButton.className = 'text-rose-400 hover:text-rose-300 focus:outline-none p-1.5 rounded-full hover:bg-rose-500/20 transition-colors';
        deleteButton.innerHTML = '<i class="fas fa-trash-alt fa-sm" aria-hidden="true"></i>';
        deleteButton.title = translations[currentLanguage]?.delete_button || translations.en.delete_button; 
        deleteButton.onclick = () => deleteVocabTerm(index); 
        tdAction.appendChild(deleteButton);
        tr.append(tdTerm, tdAction);
        vocabTableBody.appendChild(tr);
    });
    const vocabTable = $('vocab-table');
    if (vocabTable) {
        const thead = vocabTable.querySelector('thead');
        if (thead) {
            thead.style.backgroundColor = "var(--bg-tertiary)"; 
            thead.style.color = "var(--text-accent)";
        }
        if(vocabTableEmptyMsg) vocabTableEmptyMsg.style.color = "var(--text-secondary)";
    }
    const vocabTableContainer = vocabTableBody.closest('div');
    if(vocabTableContainer) {
        vocabTableContainer.style.borderColor = "var(--border-primary)";
        vocabTableContainer.style.backgroundColor = "color-mix(in srgb, var(--bg-tertiary) 30%, transparent)";
    }
}

function addTermToVocabulary(term) {
    const trimmedTerm = term.trim();
    if (trimmedTerm.length <= 1 || /^\d+$/.test(trimmedTerm) || /^[.,!?;:(){}\[\]"']+$/.test(trimmedTerm)) return false;
    const termLowerCase = trimmedTerm.toLowerCase(); 
    if (!userVocabulary.some(existingTerm => existingTerm.toLowerCase() === termLowerCase)) {
        userVocabulary.push(trimmedTerm);
        return true;
    }
    return false;
}

btnAddVocabTerm.onclick = () => {
    const term = newVocabTermInput.value;
    if (addTermToVocabulary(term)) { 
        userVocabulary.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), currentLanguage, { sensitivity: 'base' })); 
        saveUserVocabulary(); renderVocabularyTable(); 
        newVocabTermInput.value = ''; 
        showToast('toast_vocab_added', 'success', 3500, term.trim()); 
    } else if (term.trim()) {
        showToast('toast_vocab_already_exists', 'info', 3500, term.trim()); 
    } else {
        showToast('toast_vocab_enter_term', 'info'); 
    }
    newVocabTermInput.focus();
};
newVocabTermInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') btnAddVocabTerm.click(); });

function deleteVocabTerm(index) {
    const termToDelete = userVocabulary[index];
    userVocabulary.splice(index, 1); 
    saveUserVocabulary(); renderVocabularyTable(); 
    showToast('toast_vocab_removed', 'success', 3500, termToDelete); 
}

btnVocabImportTxt.onclick = () => vocabFileImportInput.click();
vocabFileImportInput.onchange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") { 
        const reader = new FileReader();
        reader.onload = (e) => { 
            const lines = e.target.result.split('\n'); 
            let importedCount = 0;
            lines.forEach(line => { if (addTermToVocabulary(line)) importedCount++; }); 
            if (importedCount > 0) {
                userVocabulary.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), currentLanguage, { sensitivity: 'base' }));
                saveUserVocabulary(); renderVocabularyTable();
                showToast('toast_vocab_import_success', 'success', 3500, importedCount); 
            } else {
                showToast('toast_vocab_import_no_new', 'info'); 
            }
        };
        reader.readAsText(file); 
    } else if (file) {
        showToast('toast_vocab_import_select_txt', 'error'); 
    }
    vocabFileImportInput.value = ''; 
};

btnVocabExportTxt.onclick = () => {
    if (userVocabulary.length === 0) { showToast('toast_vocab_export_no_vocab', 'info'); return; }
    const content = userVocabulary.join('\n'); 
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' }); 
    const link = document.createElement('a'); 
    link.href = URL.createObjectURL(blob);
    const dateString = new Date().toISOString().slice(0,10).replace(/-/g,"");
    link.download = `vokabular_export_${dateString}.txt`; 
    document.body.appendChild(link); link.click(); document.body.removeChild(link); 
    URL.revokeObjectURL(link.href);
    showToast('toast_vocab_export_success', 'success'); 
};

btnVocabOpen.onclick = () => { loadUserVocabulary(); vocabModal.classList.add('open'); newVocabTermInput.focus(); };
const closeVocabModal = () => vocabModal.classList.remove('open');
btnVocabCloseModalX.onclick = closeVocabModal;
btnVocabModalCloseFooter.onclick = closeVocabModal;

btnAddManualVocab.onclick = () => {
    const text = txtTranscript.value;
    if (!text.trim()) { showToast('toast_no_text_for_manual_vocab', 'info'); return; }
    const words = text.split(/[\s.,!?;:(){}\[\]"'\n\r\t]+/).filter(word => word.length > 1); 
    let addedCount = 0;
    [...new Set(words)].forEach(word => { if (addTermToVocabulary(word)) addedCount++; }); 
    if (addedCount > 0) {
        userVocabulary.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), currentLanguage, { sensitivity: 'base' }));
        saveUserVocabulary(); renderVocabularyTable();
        showToast('toast_manual_vocab_added', 'success', 3500, addedCount); 
    } else {
        showToast('toast_manual_vocab_no_new', 'info'); 
    }
};

// --- Audio Visualizer ---
function setupVisualizer() {
  audioVis.innerHTML = ''; visualizerBars.length = 0; 
  if (!audioContext || !analyser) return; 
  analyser.fftSize = 128; const bufferLength = analyser.frequencyBinCount; 
  const numBars = 32; 
  for (let i = 0; i < numBars; i++) {
    const bar = document.createElement('div'); bar.className = 'visualizer-bar';
    bar.style.height = '3px'; 
    audioVis.appendChild(bar); visualizerBars.push(bar);
  }
  drawVisualizer(bufferLength); 
}

function drawVisualizer(bufferLength) {
  if (!isRecording || !analyser || visualizerBars.length === 0) { 
    if(analyser) analyser.disconnect(); 
    if(sourceNode) sourceNode.disconnect(); 
    audioVisContainer.classList.add('hidden'); return; 
  }
  requestAnimationFrame(() => drawVisualizer(bufferLength)); 
  const dataArray = new Uint8Array(bufferLength); 
  analyser.getByteFrequencyData(dataArray); 
  const barHeightMultiplier = (audioVis.clientHeight - 12) / 255; 
  for (let i = 0; i < visualizerBars.length; i++) { 
    const dataIndex = Math.floor(i * bufferLength / visualizerBars.length);
    const barHeight = Math.max(3, dataArray[dataIndex] * barHeightMultiplier); 
    visualizerBars[i].style.height = `${barHeight}px`;
  }
}

// --- Clipboard History Functions ---
function loadHistorySettings() {
    MAX_HISTORY_ITEMS = parseInt(localStorage.getItem('audio_suite_history_max_items'), 10) || MAX_HISTORY_ITEMS_DEFAULT;
    if (maxHistoryItemsInput) maxHistoryItemsInput.value = MAX_HISTORY_ITEMS;
}

function saveHistorySettings() {
    const newMax = parseInt(maxHistoryItemsInput.value, 10);
    if (!isNaN(newMax) && newMax >= 1 && newMax <= 200) { 
        MAX_HISTORY_ITEMS = newMax;
        localStorage.setItem('audio_suite_history_max_items', MAX_HISTORY_ITEMS);
        if (clipboardHistory.length > MAX_HISTORY_ITEMS) {
            clipboardHistory = clipboardHistory.slice(0, MAX_HISTORY_ITEMS);
            saveHistoryToLocalStorage(); filterAndRenderHistory();
        }
        showToast('toast_history_settings_saved', 'success');
    } else {
        showToast('toast_history_settings_invalid_max', 'error');
        maxHistoryItemsInput.value = MAX_HISTORY_ITEMS; 
    }
    historySettingsModal.classList.remove('open'); 
}

function loadHistoryFromLocalStorage() {
    const storedHistory = localStorage.getItem('audio_suite_history');
    clipboardHistory = storedHistory ? JSON.parse(storedHistory).map(item => ({...item, timestamp: new Date(item.timestamp)})) : []; 
    if (clipboardHistory.length > MAX_HISTORY_ITEMS) {
        clipboardHistory = clipboardHistory.slice(0, MAX_HISTORY_ITEMS); 
    }
    currentlyDisplayedHistory = [...clipboardHistory]; 
}

function saveHistoryToLocalStorage() {
    localStorage.setItem('audio_suite_history', JSON.stringify(clipboardHistory));
}

function addToClipboardHistory(text, typeKey = "history_type_transcript") {
    if (!text || text.trim() === "") return; 
    let type = translations[currentLanguage]?.[typeKey] || translations.en?.[typeKey] || typeKey; 
    if (typeKey.includes(" (") && typeKey.includes(")")) { 
        type = typeKey; 
    }

    if (clipboardHistory.length > 0 && clipboardHistory[0].text === text && clipboardHistory[0].type === type) {
         clipboardHistory[0].timestamp = new Date(); 
    } else { 
        clipboardHistory.unshift({ id: Date.now() + Math.random().toString(36).substring(2,9), text, timestamp: new Date(), type });
        if (clipboardHistory.length > MAX_HISTORY_ITEMS) {
            clipboardHistory = clipboardHistory.slice(0, MAX_HISTORY_ITEMS); 
        }
    }
    saveHistoryToLocalStorage(); filterAndRenderHistory(); 
}

function renderHistoryItems(itemsToRender) {
    clipboardHistoryListDiv.innerHTML = ''; 
    if (itemsToRender.length === 0) { 
        const emptyMsgKey = (historySearchInput.value || dateFilterFromInput.value || dateFilterToInput.value) ? 'no_history_for_filter' : 'history_empty';
        clipboardHistoryListDiv.innerHTML = `<p class="text-center py-6" style="color: var(--text-secondary);">${translations[currentLanguage]?.[emptyMsgKey] || translations.en[emptyMsgKey]}</p>`;
        deleteSelectedHistoryButton.style.display = 'none'; 
        selectAllHistoryCheckbox.checked = false; selectAllHistoryCheckbox.disabled = true; 
        return;
    }
    selectAllHistoryCheckbox.disabled = false; 

    itemsToRender.forEach(item => { 
        const itemDiv = document.createElement('div');
        itemDiv.className = `history-item ${selectedHistoryItemIds.has(item.id) ? 'selected' : ''}`; 
        itemDiv.dataset.id = item.id;

        const checkbox = document.createElement('input'); 
        checkbox.type = 'checkbox'; checkbox.className = 'form-checkbox mt-1.5 flex-shrink-0';
        checkbox.checked = selectedHistoryItemIds.has(item.id); checkbox.dataset.itemId = item.id;
        checkbox.onchange = handleHistoryItemCheckboxChange; 
        
        const contentWrapper = document.createElement('div'); contentWrapper.className = 'flex flex-col gap-2 flex-grow'; 
        const headerDiv = document.createElement('div'); headerDiv.className = 'flex justify-between items-center';
        const timeSpan = document.createElement('span'); timeSpan.className = 'timestamp'; 
        timeSpan.textContent = `${item.type} - ${item.timestamp.toLocaleString(currentLanguage, { dateStyle: 'medium', timeStyle: 'short' })}`;
        headerDiv.appendChild(timeSpan); contentWrapper.appendChild(headerDiv);

        if (editingHistoryItemId === item.id) { 
            const editorTextarea = document.createElement('textarea'); 
            editorTextarea.className = 'history-item-editor form-input'; editorTextarea.value = item.text;
            setTimeout(() => editorTextarea.focus(), 0); 
            contentWrapper.appendChild(editorTextarea);
        } else { 
            const textPreviewP = document.createElement('p'); textPreviewP.className = 'text-preview'; 
            textPreviewP.textContent = item.text; contentWrapper.appendChild(textPreviewP);
        }

        const actionsDiv = document.createElement('div'); actionsDiv.className = 'history-item-actions'; 
        if (editingHistoryItemId === item.id) { 
            const saveBtn = createHistoryActionButton(`<i class="fas fa-save mr-1" aria-hidden="true"></i>` + (translations[currentLanguage]?.save_button || translations.en.save_button), 'btn-primary', () => saveEditedHistoryItem(item.id, contentWrapper.querySelector('.history-item-editor').value));
            const cancelBtn = createHistoryActionButton(`<i class="fas fa-times mr-1" aria-hidden="true"></i>` + (translations[currentLanguage]?.cancel_button || translations.en.cancel_button), 'btn-neutral', cancelEditHistoryItem);
            actionsDiv.append(saveBtn, cancelBtn);
        } else { 
            const copyBtn = createHistoryActionButton(`<i class="fas fa-paste mr-1" aria-hidden="true"></i>` + (translations[currentLanguage]?.copy_button || translations.en.copy_button), 'btn-secondary', () => copyTextToClipboard(item.text, 'toast_copied_to_clipboard'));
            const editBtn = createHistoryActionButton(`<i class="fas fa-edit mr-1" aria-hidden="true"></i>` + (translations[currentLanguage]?.edit_button || translations.en.edit_button), 'btn-tertiary', () => startEditHistoryItem(item.id));
            const deleteBtn = createHistoryActionButton(`<i class="fas fa-trash-alt mr-1" aria-hidden="true"></i>` + (translations[currentLanguage]?.delete_button || translations.en.delete_button), 'btn-danger', () => deleteHistoryItem(item.id));
            actionsDiv.append(copyBtn, editBtn, deleteBtn);
        }
        contentWrapper.appendChild(actionsDiv);
        itemDiv.innerHTML = ''; 
        itemDiv.append(checkbox, contentWrapper); 
        
        clipboardHistoryListDiv.appendChild(itemDiv);
    });
    updateDeleteSelectedButtonState(); updateSelectAllCheckboxState(); 
}

function createHistoryActionButton(innerHTML, buttonClass, onClickHandler) {
    const button = document.createElement('button');
    button.innerHTML = innerHTML;
    button.className = `action-button ${buttonClass}`;
    button.onclick = onClickHandler;
    return button;
}

function handleHistoryItemCheckboxChange(event) {
    const itemId = event.target.dataset.itemId; 
    const itemDiv = event.target.closest('.history-item');
    if (event.target.checked) { selectedHistoryItemIds.add(itemId); itemDiv?.classList.add('selected'); }
    else { selectedHistoryItemIds.delete(itemId); itemDiv?.classList.remove('selected'); }
    updateDeleteSelectedButtonState(); updateSelectAllCheckboxState(); 
}

function updateDeleteSelectedButtonState() {
    const deleteButtonText = translations[currentLanguage]?.delete_selection_button || translations.en.delete_selection_button;
    deleteSelectedHistoryButton.style.display = selectedHistoryItemIds.size > 0 ? 'inline-flex' : 'none'; 
    if (selectedHistoryItemIds.size > 0) {
        deleteSelectedHistoryButton.innerHTML = `<i class="fas fa-check-double mr-1.5" aria-hidden="true"></i> ${selectedHistoryItemIds.size} ${deleteButtonText}`; 
    }
}

function updateSelectAllCheckboxState() {
    if (currentlyDisplayedHistory.length === 0) { 
        selectAllHistoryCheckbox.checked = false; 
        selectAllHistoryCheckbox.disabled = true; 
        return; 
    }
    selectAllHistoryCheckbox.disabled = false;
    selectAllHistoryCheckbox.checked = currentlyDisplayedHistory.length > 0 && 
                                      currentlyDisplayedHistory.every(item => selectedHistoryItemIds.has(item.id));
}

function filterAndRenderHistory() {
    const searchTerm = historySearchInput.value.toLowerCase(); 
    const dateFrom = dateFilterFromInput.value ? new Date(dateFilterFromInput.value + "T00:00:00") : null; 
    const dateTo = dateFilterToInput.value ? new Date(dateFilterToInput.value + "T23:59:59") : null; 

    currentlyDisplayedHistory = clipboardHistory.filter(item => {
        const textMatch = !searchTerm || item.text.toLowerCase().includes(searchTerm) || item.type.toLowerCase().includes(searchTerm); 
        const itemDate = item.timestamp instanceof Date ? item.timestamp : new Date(item.timestamp); 
        if (isNaN(itemDate.getTime())) return false; 
        const dateMatch = (!dateFrom || itemDate >= dateFrom) && (!dateTo || itemDate <= dateTo); 
        return textMatch && dateMatch;
    });
    renderHistoryItems(currentlyDisplayedHistory); 
}

function startEditHistoryItem(itemId) {
    if (editingHistoryItemId !== null && editingHistoryItemId !== itemId) {
        cancelEditHistoryItem(); 
    }
    editingHistoryItemId = itemId; 
    filterAndRenderHistory(); 
}

function saveEditedHistoryItem(itemId, newText) {
    const itemIndex = clipboardHistory.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        clipboardHistory[itemIndex].text = newText; 
        saveHistoryToLocalStorage(); 
        showToast('toast_history_entry_updated', 'success'); 
    }
    editingHistoryItemId = null; 
    filterAndRenderHistory(); 
}

function cancelEditHistoryItem() { 
    editingHistoryItemId = null; 
    filterAndRenderHistory(); 
}

function deleteHistoryItem(id) {
    clipboardHistory = clipboardHistory.filter(item => item.id !== id); 
    selectedHistoryItemIds.delete(id); 
    saveHistoryToLocalStorage(); 
    filterAndRenderHistory(); 
    showToast('toast_history_entry_deleted', 'success'); 
}

function deleteSelectedHistoryItems() {
    if (selectedHistoryItemIds.size === 0) { 
        showToast('toast_no_history_selection_to_delete', 'info'); 
        return; 
    }
    const originalSize = selectedHistoryItemIds.size;
    clipboardHistory = clipboardHistory.filter(item => !selectedHistoryItemIds.has(item.id)); 
    selectedHistoryItemIds.clear(); 
    saveHistoryToLocalStorage(); 
    filterAndRenderHistory();
    showToast('toast_history_selection_deleted', 'success', 3500, originalSize); 
}

clearHistoryButton.onclick = () => {
    showConfirmationModal("confirm_delete_history_all", () => { 
        clipboardHistory = []; 
        selectedHistoryItemIds.clear(); 
        saveHistoryToLocalStorage(); 
        filterAndRenderHistory(); 
        showToast('toast_history_cleared', 'success'); 
    });
};

exportHistoryButton.onclick = () => {
    if (clipboardHistory.length === 0) { 
        showToast("toast_history_empty_export", 'info'); 
        return; 
    }
    try {
        const jsonData = JSON.stringify(clipboardHistory, null, 2); 
        const blob = new Blob([jsonData], { type: 'application/json' }); 
        const url = URL.createObjectURL(blob); 
        const a = document.createElement('a'); 
        const dateString = new Date().toISOString().slice(0,10).replace(/-/g,"");
        a.download = `audio_suite_verlauf_${dateString}.json`; 
        a.href = url; 
        document.body.appendChild(a); 
        a.click(); 
        document.body.removeChild(a); 
        URL.revokeObjectURL(url); 
        showToast('toast_history_export_success', 'success'); 
    } catch (e) { 
        console.error("Error exporting history:", e); 
        showToast("toast_history_export_error", 'error'); 
    }
};

importHistoryFileLabel.onclick = () => importHistoryFileInput.click();
importHistoryFileInput.onchange = (event) => {
    const file = event.target.files[0]; 
    if (!file) return;
    if (file.type !== 'application/json') { 
        showToast("toast_history_import_select_json", 'error'); 
        event.target.value = null; 
        return; 
    } 
    const reader = new FileReader();
    reader.onload = e => { 
        try {
            const importedData = JSON.parse(e.target.result); 
            if (!Array.isArray(importedData)) throw new Error("Imported data is not an array."); 
            const validatedHistory = importedData.reduce((acc, item) => {
                if (item && typeof item.text === 'string' && typeof item.timestamp === 'string') { 
                    const ts = new Date(item.timestamp);
                    if (!isNaN(ts.getTime())) { 
                        acc.push({ 
                            id: item.id || Date.now() + Math.random().toString(36).substring(2,9), 
                            text: item.text, 
                            timestamp: ts, 
                            type: item.type || (translations[currentLanguage]?.history_type_imported || "Imported") 
                        });
                    }
                } 
                return acc;
            }, []);
            clipboardHistory = [...validatedHistory, ...clipboardHistory]
                              .sort((a,b) => b.timestamp - a.timestamp) 
                              .slice(0, MAX_HISTORY_ITEMS); 
            selectedHistoryItemIds.clear(); 
            saveHistoryToLocalStorage(); 
            filterAndRenderHistory(); 
            showToast("toast_history_import_success", 'success'); 
        } catch (err) { 
            console.error("Import Error:", err); 
            showToast("toast_history_import_error", 'error', 3500, err.message); 
        }
        finally { event.target.value = null; } 
    };
    reader.onerror = () => { 
        showToast("toast_history_import_file_read_error", 'error'); 
        event.target.value = null; 
    };
    reader.readAsText(file); 
};

clearDateFilterButton.onclick = () => {
    dateFilterFromInput.value = ""; 
    dateFilterToInput.value = ""; 
    filterAndRenderHistory(); 
    showToast("toast_history_date_filter_cleared", 'info'); 
};

selectAllHistoryCheckbox.onchange = (event) => {
    currentlyDisplayedHistory.forEach(item => {
        if (event.target.checked) {
            selectedHistoryItemIds.add(item.id);
        } else {
            selectedHistoryItemIds.delete(item.id);
        }
    }); 
    renderHistoryItems(currentlyDisplayedHistory); 
};

btnToggleHistory.onclick = () => {
    const isHidden = historyPanelContent.classList.toggle('hidden'); 
    const currentTextKey = isHidden ? 'show_history_button' : 'hide_history_button'; 
    toggleHistoryLabel.textContent = translations[currentLanguage]?.[currentTextKey] || translations.en[currentTextKey];
    btnToggleHistory.title = translations[currentLanguage]?.[currentTextKey] || translations.en[currentTextKey]; 
};

const openHistorySettingsModal = () => { maxHistoryItemsInput.value = MAX_HISTORY_ITEMS; historySettingsModal.classList.add('open'); }
const closeHistorySettingsModal = () => historySettingsModal.classList.remove('open');
btnHistorySettings.onclick = openHistorySettingsModal;
btnHistorySettingsCloseModalX.onclick = closeHistorySettingsModal;
btnHistorySettingsModalCloseFooter.onclick = closeHistorySettingsModal;
btnHistorySettingsSave.onclick = saveHistorySettings; 


// --- Custom Confirmation Modal ---
function showConfirmationModal(messageKey, onConfirm, interpolateValue = null) {
    let message = translations[currentLanguage]?.[messageKey] || translations.en?.[messageKey] || messageKey; 
    if (interpolateValue !== null) message = message.replace('{value}', interpolateValue.toString());
    
    const existingModal = document.getElementById('customConfirmationModal'); 
    if (existingModal) existingModal.remove(); 

    const modalOverlay = document.createElement('div'); 
    modalOverlay.id = 'customConfirmationModal';
    modalOverlay.className = 'modal-overlay open'; 
    modalOverlay.setAttribute('role', 'alertdialog');
    modalOverlay.setAttribute('aria-modal', 'true');
    modalOverlay.setAttribute('aria-labelledby', 'confirmation-modal-message');

    const modalDialog = document.createElement('div'); 
    modalDialog.className = 'modal-content !max-w-md'; 
    
    const messageP = document.createElement('p'); 
    messageP.id = 'confirmation-modal-message';
    messageP.className = 'mb-8 text-center text-lg'; 
    messageP.style.color = 'var(--text-primary)'; 
    messageP.textContent = message;
    
    const buttonsDiv = document.createElement('div'); 
    buttonsDiv.className = 'flex gap-4 justify-center'; 
    
    const confirmButton = document.createElement('button'); 
    confirmButton.className = 'action-button btn-danger py-2.5 px-8 text-base';
    confirmButton.textContent = translations[currentLanguage]?.confirm_button || translations.en.confirm_button;
    confirmButton.onclick = () => { onConfirm(); modalOverlay.remove(); }; 
    
    const cancelButton = document.createElement('button'); 
    cancelButton.className = 'action-button btn-neutral py-2.5 px-8 text-base';
    cancelButton.textContent = translations[currentLanguage]?.cancel_button || translations.en.cancel_button;
    cancelButton.onclick = () => modalOverlay.remove(); 
    
    buttonsDiv.append(confirmButton, cancelButton); 
    modalDialog.append(messageP, buttonsDiv);
    modalOverlay.appendChild(modalDialog); 
    document.body.appendChild(modalOverlay); 
    confirmButton.focus(); 
}

// --- IndexedDB Initialisierung und Funktionen für Audio-Fallbacks ---
function initFallbackDB() {
    const request = indexedDB.open(FALLBACK_DB_NAME, FALLBACK_DB_VERSION);
    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(FALLBACK_STORE_NAME)) {
            const store = db.createObjectStore(FALLBACK_STORE_NAME, { keyPath: 'id', autoIncrement: true });
            store.createIndex('timestamp', 'timestamp', { unique: false });
            console.info("Audio-Archiv Object Store erfolgreich erstellt oder aktualisiert.");
        }
    };
    request.onsuccess = (event) => {
        fallbackDB = event.target.result;
        console.info("Audio-Archiv Datenbank erfolgreich initialisiert.");
        trimAudioFallbacks(); 
    };
    request.onerror = (event) => {
        console.error("Fehler beim Initialisieren der Audio-Archiv Datenbank:", event.target.error);
        showToast('audio_fallback_db_init_error', 'error', 5000); 
    };
}

function addAudioFallback(blob, name) {
    if (!fallbackDB) { 
        console.error("Audio-Archiv Datenbank ist nicht initialisiert. Eintrag kann nicht gespeichert werden."); 
        showToast('audio_fallback_db_init_error', 'error');
        return; 
    }
    const transaction = fallbackDB.transaction([FALLBACK_STORE_NAME], 'readwrite');
    const store = transaction.objectStore(FALLBACK_STORE_NAME);
    const audioEntry = { blob: blob, name: name, timestamp: new Date() };
    const request = store.add(audioEntry);
    
    request.onsuccess = () => {
        console.info(`Audio-Eintrag "${name}" erfolgreich im Archiv gespeichert.`);
        showToast('audio_fallback_saved', 'success', 2000);
        trimAudioFallbacks(); 
    };
    request.onerror = (event) => {
        console.error(`Fehler beim Speichern des Audio-Eintrags "${name}" im Archiv:`, event.target.error);
        showToast('audio_fallback_db_error', 'error', 3500, event.target.error.message);
    };
}

function trimAudioFallbacks() {
    if (!fallbackDB) return;
    const transaction = fallbackDB.transaction([FALLBACK_STORE_NAME], 'readwrite');
    const store = transaction.objectStore(FALLBACK_STORE_NAME);
    const countRequest = store.count();
    
    countRequest.onsuccess = () => {
        const count = countRequest.result;
        if (count > MAX_AUDIO_FALLBACKS) {
            const index = store.index('timestamp');
            const cursorRequest = index.openCursor(null, 'next'); 
            let itemsToDelete = count - MAX_AUDIO_FALLBACKS;
            
            cursorRequest.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor && itemsToDelete > 0) {
                    store.delete(cursor.primaryKey); 
                    itemsToDelete--;
                    console.info(`Alten Audio-Archiv Eintrag gelöscht: ID ${cursor.primaryKey}`);
                    cursor.continue(); 
                } else if (itemsToDelete === 0) {
                    console.info("Audio-Archiv auf maximale Anzahl bereinigt.");
                }
            };
            cursorRequest.onerror = (event) => console.error("Fehler beim Bereinigen alter Audio-Archiv Einträge (Cursor):", event.target.error);
        }
    };
    countRequest.onerror = (event) => console.error("Fehler beim Zählen der Audio-Archiv Einträge:", event.target.error);
}

async function getAudioFallbacks() {
    return new Promise((resolve, reject) => {
        if (!fallbackDB) { 
            reject(new Error(translations[currentLanguage]?.audio_fallback_db_init_error || "Audio archive database not initialized.")); 
            return; 
        }
        const transaction = fallbackDB.transaction([FALLBACK_STORE_NAME], 'readonly');
        const store = transaction.objectStore(FALLBACK_STORE_NAME);
        const getAllRequest = store.getAll();
        
        getAllRequest.onsuccess = () => {
            resolve(getAllRequest.result.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))); 
        };
        getAllRequest.onerror = (event) => {
            console.error("Fehler beim Abrufen der Audio-Archiv Einträge:", event.target.error);
            reject(event.target.error);
        };
    });
}

async function deleteAudioFallbackFromDB(id) {
    return new Promise((resolve, reject) => {
        if (!fallbackDB) { 
            reject(new Error(translations[currentLanguage]?.audio_fallback_db_init_error || "Audio archive database not initialized.")); 
            return; 
        }
        const transaction = fallbackDB.transaction([FALLBACK_STORE_NAME], 'readwrite');
        const store = transaction.objectStore(FALLBACK_STORE_NAME);
        const request = store.delete(id);
        request.onsuccess = () => resolve();
        request.onerror = (event) => {
            console.error("Fehler beim Löschen des Audio-Archiv Eintrags aus DB:", event.target.error);
            reject(event.target.error);
        };
    });
}

async function openAudioFallbackModal() {
    try {
        const fallbacks = await getAudioFallbacks();
        renderAudioFallbacks(fallbacks);
        audioFallbackModal.classList.add('open');
    } catch (error) {
        console.error("Fehler beim Öffnen des Audio-Archiv-Modals:", error);
        showToast('audio_fallback_db_error', 'error', 3500, error.message || error.toString());
    }
}

function closeAudioFallbackModal() {
    audioFallbackModal.classList.remove('open');
}

function renderAudioFallbacks(fallbacks) {
    audioFallbackListDiv.innerHTML = '';
    audioFallbackEmptyMsg.classList.toggle('hidden', fallbacks.length > 0);
    translateElement(audioFallbackEmptyMsg, 'no_audio_fallbacks_message');

    fallbacks.forEach(fallback => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'fallback-item'; 

        const nameSpan = document.createElement('span');
        nameSpan.className = 'fallback-name';
        nameSpan.textContent = fallback.name;

        const timeSpan = document.createElement('span');
        timeSpan.className = 'timestamp';
        timeSpan.textContent = new Date(fallback.timestamp).toLocaleString(currentLanguage, { dateStyle: 'medium', timeStyle: 'short' });
        
        const audioPlayer = document.createElement('audio');
        audioPlayer.controls = true;
        audioPlayer.className = 'w-full mt-2 rounded-md';
        try {
            audioPlayer.src = URL.createObjectURL(fallback.blob);
        } catch (e) {
            console.error("Error creating object URL for audio blob:", e, fallback.blob);
        }
        
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'fallback-item-actions';

        const reTranscribeBtn = createHistoryActionButton(`<i class="fas fa-microphone-alt mr-1" aria-hidden="true"></i> ${translations[currentLanguage]?.retranscribe_audio_button || 'Re-Transcribe'}`, 'btn-primary', async () => {
            closeAudioFallbackModal();
            await processAudio(fallback.blob, fallback.name);
        });
        const downloadBtn = createHistoryActionButton(`<i class="fas fa-download mr-1" aria-hidden="true"></i> ${translations[currentLanguage]?.download_audio_button || 'Download'}`, 'btn-secondary', () => {
            const link = document.createElement('a');
            link.href = audioPlayer.src; 
            link.download = fallback.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
        const deleteBtn = createHistoryActionButton(`<i class="fas fa-trash-alt mr-1" aria-hidden="true"></i> ${translations[currentLanguage]?.delete_audio_fallback_button || 'Delete'}`, 'btn-danger', () => {
            showConfirmationModal('confirm_delete_audio_fallback', async () => {
                try {
                    await deleteAudioFallbackFromDB(fallback.id);
                    showToast('toast_history_entry_deleted', 'success'); 
                    openAudioFallbackModal(); 
                } catch (error) {
                    console.error("Fehler beim Löschen des Archiv-Eintrags:", error);
                    showToast('audio_fallback_db_error', 'error', 3500, error.message);
                }
            });
        });

        actionsDiv.append(reTranscribeBtn, downloadBtn, deleteBtn);
        itemDiv.append(nameSpan, timeSpan, audioPlayer, actionsDiv);
        audioFallbackListDiv.appendChild(itemDiv);
    });
}

btnAudioFallbackOpen.onclick = openAudioFallbackModal;
btnAudioFallbackCloseModalX.onclick = closeAudioFallbackModal;
btnAudioFallbackModalCloseFooter.onclick = closeAudioFallbackModal;


// --- Audio Processing (Transcription with OpenAI) ---
 async function transcribeAudioOpenAI(audioBlob, audioFileName = 'recording.webm') {
    if (!OPENAI_KEY) { 
        showToast('toast_no_api_key', 'error'); 
        setStatus('status_api_key_missing', false); 
        openSettingsModal(); 
        return null; 
    } 
    if (!audioBlob || audioBlob.size === 0) { 
        showToast('toast_no_audio_data', 'error'); 
        setStatus('status_ready', false); 
        return null; 
    } 

    setStatus('status_transcribing', true); 
    const formData = new FormData(); 
    formData.append('file', audioBlob, audioFileName); 
    formData.append('model', 'whisper-1'); 

    if (selectLang.value) formData.append('language', selectLang.value); 
    let temperatureValue = parseFloat(inputTemperature.value); 
    if (isNaN(temperatureValue) || temperatureValue < 0 || temperatureValue > 1) { 
        temperatureValue = 0; 
        inputTemperature.value = "0"; 
    }
    formData.append('temperature', temperatureValue.toString());

    let fullPrompt = inputPrompt.value.trim();
    const vocabString = localStorage.getItem('USER_VOCAB_OPENAI_PROMPT_STRING');
    if (vocabString) fullPrompt = `${vocabString}. ${fullPrompt}`.trim();
    if (chkDiarize.checked) fullPrompt = `${fullPrompt} Please try to identify and label different speakers (e.g., Speaker 1:, Speaker 2:).`.trim();
    if (fullPrompt) formData.append('prompt', fullPrompt);
    
    try {
        const response = await fetch(OPENAI_TRANSCRIPTION_URL, { 
            method: 'POST', 
            headers: { 'Authorization': `Bearer ${OPENAI_KEY}` }, 
            body: formData 
        });
        const result = await response.json(); 
        if (!response.ok) { 
            const errorMsg = result.error?.message || `API Error: ${response.status}`;
            showToast('toast_transcription_error_api', 'error', 3500, errorMsg); 
            setStatus('status_transcription_error', false); 
            return null;
        }
        setStatus('status_transcription_done', false); 
        return result.text; 
    } catch (error) { 
        console.error("Transcription API call error:", error);
        showToast('toast_network_error_openai', 'error'); 
        setStatus('status_network_error', false); 
        return null;
    }
}

async function processAudio(audioBlob, audioFileName) {
    if (audioBlob && audioBlob.size > 0) {
        const fallbackName = `${audioFileName.split('.')[0]}_${new Date().toISOString().replace(/[:.]/g, '-')}.${audioFileName.split('.').pop() || 'webm'}`;
        addAudioFallback(audioBlob, fallbackName);
    }

    const transcribedText = await transcribeAudioOpenAI(audioBlob, audioFileName); 
    if (transcribedText !== null) { 
        let finalTextToDisplay, historyEntryTypeKey;
        if (chkContinuous.checked && txtTranscript.value.trim() !== "") { 
            finalTextToDisplay = txtTranscript.value + "\n\n" + transcribedText;
            historyEntryTypeKey = "history_type_transcript_continuous";
        } else { 
            finalTextToDisplay = transcribedText;
            historyEntryTypeKey = "history_type_transcript";
        }
        txtTranscript.value = finalTextToDisplay; 
        txtTranscript.scrollTop = txtTranscript.scrollHeight; 
        showToast('toast_transcription_success', 'success'); 
        addToClipboardHistory(finalTextToDisplay, historyEntryTypeKey); 
        copyTextToClipboard(finalTextToDisplay, 'toast_copied_to_clipboard'); 

        if (chkAutoRefine.checked || chkTimeTracking.checked) {
            await refineTextOpenAI(REFINE_TEXT_SYSTEM_PROMPT); 
        }
    }
    updateButtonStates(); 
    if (!isRecording) setStatus('status_ready', false); 
}


// --- Recording Logic ---
btnRecord.onclick = async () => {
  if (!OPENAI_KEY) { 
      showToast('toast_no_api_key', 'error'); 
      openSettingsModal(); 
      return; 
  } 
  if (!isRecording) { 
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
              audio: {
                  channelCount: 1,
                  sampleRate: 16000,
                  sampleSize: 16,
                  echoCancellation: true,
                  noiseSuppression: true,
                  autoGainControl: true
              }
          });
      isRecording = true; 
      btnRecord.classList.replace('record-button-start', 'record-button-stop');
      recordLabel.textContent = translations[currentLanguage]?.stop_recording_button || translations.en.stop_recording_button;
      setStatus('status_recording', false);

      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser(); 
      sourceNode = audioContext.createMediaStreamSource(stream);
      sourceNode.connect(analyser); 
      setupVisualizer(); 
      audioVisContainer.classList.remove('hidden');
      
      audioChunks = []; 
      let options = { mimeType: 'audio/webm;codecs=opus' }; 
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.warn(`${options.mimeType} not supported, falling back.`);
          options.mimeType = 'audio/webm'; 
          if (!MediaRecorder.isTypeSupported(options.mimeType)) {
              options.mimeType = ''; 
              console.warn(`audio/webm also not supported, letting browser pick default.`);
          }
      }

      mediaRecorder = new MediaRecorder(stream, options); 
      mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); }; 
      mediaRecorder.onstop = async () => { 
        stream.getTracks().forEach(track => track.stop()); 
        if (analyser) analyser.disconnect(); 
        if (sourceNode) sourceNode.disconnect(); 
        if (audioContext && audioContext.state !== 'closed') {
            audioContext.close().catch(e => console.warn("Error closing audio context:", e));
        } 
        audioVisContainer.classList.add('hidden'); 
        currentAudioBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' }); 
        audioChunks = []; 
        const wavBlob = await convertWebMToWav16k(currentAudioBlob);
        await processAudio(wavBlob, 'aufnahme_16k_mono.wav'); 
      };
      mediaRecorder.start(); 
    } catch (err) { 
      console.error("Error starting recording:", err);
      showToast('toast_mic_access_error', 'error', 3500, err.message);
      setStatus('toast_recording_error', false); 
      isRecording = false; 
      btnRecord.classList.replace('record-button-stop', 'record-button-start');
      recordLabel.textContent = translations[currentLanguage]?.start_recording_button || translations.en.start_recording_button;
    }
  } else { 
    if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
    isRecording = false;
    btnRecord.classList.replace('record-button-stop', 'record-button-start');
    recordLabel.textContent = translations[currentLanguage]?.start_recording_button || translations.en.start_recording_button;
  }
};


// --- File Upload Logic ---
 fileUpload.onchange = async (event) => {
    const file = event.target.files[0];
    if (file) {
        if (!OPENAI_KEY) { 
            showToast('toast_no_api_key', 'error'); 
            openSettingsModal(); 
            fileUpload.value = ''; 
            return; 
        } 
        const fileLabel = translations[currentLanguage]?.file_label || translations.en.file_label;
        const mbUnit = translations[currentLanguage]?.mb_unit || translations.en.mb_unit;
        fileNameDisplay.textContent = `${fileLabel}: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} ${mbUnit})`;
        await processAudio(file, file.name); 
        fileUpload.value = ''; 
    }
};


// --- OpenAI Chat Completion Helper ---
async function callOpenAIChatAPI(systemPrompt, userContent, temperature = 0.2, model = 'gpt-3.5-turbo') {
    if (!OPENAI_KEY) { 
        showToast('toast_no_api_key', 'error'); 
        openSettingsModal(); 
        throw new Error('API Key missing'); 
    } 
    const messages = [{ role: 'system', content: systemPrompt }]; 
    if (userContent) messages.push({ role: 'user', content: userContent }); 

    try {
        const response = await fetch(OPENAI_CHAT_COMPLETIONS_URL, { 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${OPENAI_KEY}` 
            }, 
            body: JSON.stringify({ model, messages, temperature }) 
        });
        const result = await response.json(); 
        if (!response.ok) { 
            const errorMsg = result.error?.message || `API Error: ${response.status}`;
            console.error("Chat API Error:", result);
            showToast('toast_transcription_error_api', 'error', 3500, errorMsg); 
            throw new Error(errorMsg);
        }
        if (result.choices?.[0]?.message?.content) {
            return result.choices[0].message.content; 
        } else {
            console.error("Unexpected Chat API response structure:", result);
            throw new Error('Unexpected API response structure'); 
        }
    } catch (error) { 
         console.error("Chat API call error:", error);
         if (!(error.message.includes('API Key missing') || error.message.includes('API Error'))) {
             showToast('toast_network_error_openai', 'error');
         }
        throw error; 
    }
}

// --- Text Action Functions (Using OpenAI) ---
async function refineTextOpenAI(customSystemPrompt = null) {
    const textToRefine = txtTranscript.value;
    if (!textToRefine.trim()) { 
        showToast('toast_no_text_to_refine', 'info'); 
        return; 
    } 
    setStatus('status_refining_text', true); 
    try {
        const vocab = localStorage.getItem('USER_VOCAB_OPENAI_PROMPT_STRING'); 
        let systemPromptContent;

        if (customSystemPrompt) {
            systemPromptContent = customSystemPrompt;
        } else if (chkTimeTracking.checked) { 
            systemPromptContent = currentLanguage === 'en' ? ZEITERFASSUNG_SYSTEM_PROMPT_EN : ZEITERFASSUNG_SYSTEM_PROMPT_DE;
        } else { 
            systemPromptContent = REFINE_TEXT_SYSTEM_PROMPT; 
        }
        
        if (vocab) systemPromptContent += `\n\nConsider the following vocabulary for proper nouns or technical terms: ${vocab}.`; 
        
        const modelToUse = chkTimeTracking.checked ? 'gpt-4-turbo-preview' : 'gpt-3.5-turbo'; 
        const refinedText = await callOpenAIChatAPI(systemPromptContent, textToRefine, 0.2, modelToUse);
        
        txtTranscript.value = refinedText; 
        showToast('toast_refine_success', 'success'); 
        const historyTypeKey = chkTimeTracking.checked ? "history_type_time_tracking" : "history_type_refined";
        addToClipboardHistory(refinedText, historyTypeKey); 
        copyTextToClipboard(refinedText, 'toast_copied_to_clipboard'); 
    } catch (error) { 
        console.error("Error during text refinement:", error);
    }
    finally { 
        setStatus('status_ready', false); 
        updateButtonStates(); 
    } 
}
btnRefine.onclick = () => refineTextOpenAI(); 

btnSummarize.onclick = async () => {
    const textToSummarize = txtTranscript.value;
    if (!textToSummarize.trim()) { 
        showToast('toast_no_text_to_summarize', 'info'); 
        return; 
    } 
    setStatus('status_summarizing_text', true); 
    summarizeSection.classList.add('hidden'); 
    try {
        const vocab = localStorage.getItem('USER_VOCAB_OPENAI_PROMPT_STRING'); 
        let systemPromptContent = SUMMARIZE_TEXT_SYSTEM_PROMPT; 
        if (vocab) systemPromptContent += `\n\nConsider the following vocabulary for proper nouns or technical terms: ${vocab}.`;
        
        const summary = await callOpenAIChatAPI(systemPromptContent, textToSummarize, 0.3, 'gpt-3.5-turbo'); 
        txtSummary.value = summary; 
        summarizeSection.classList.remove('hidden'); 
        showToast('toast_summarize_success', 'success'); 
        addToClipboardHistory(summary, "history_type_summary"); 
        copyTextToClipboard(summary, 'toast_copied_to_clipboard'); 
    } catch (error) { 
        console.error("Error during summarization:", error);
    }
    finally { 
        setStatus('status_ready', false); 
        updateButtonStates(); 
    } 
};

 btnTts.onclick = () => {
    const textToSpeak = txtTranscript.value;
    if (!textToSpeak.trim()) { 
        showToast('toast_no_text_to_read', 'info'); 
        return; 
    } 
    if ('speechSynthesis' in window) { 
        setStatus('status_reading_aloud', false); 
        const utterance = new SpeechSynthesisUtterance(textToSpeak); 
        const langMap = {'de': 'de-DE', 'en': 'en-US', 'fr': 'fr-FR', 'es': 'es-ES', 'zh': 'zh-CN', 'ar': 'ar-SA'};
        utterance.lang = langMap[currentLanguage] || 'en-US'; 
        
        utterance.onerror = (e) => { 
            console.error("Text-to-Speech Error:", e); 
            showToast('status_tts_error', 'error', 3500, e.error); 
            setStatus('status_ready', false); 
        }; 
        utterance.onend = () => {
            setStatus('status_tts_done', false);
            if (!isRecording) setStatus('status_ready', false); 
        }; 
        window.speechSynthesis.cancel(); 
        window.speechSynthesis.speak(utterance); 
    } else {
        showToast('toast_tts_not_supported', 'error'); 
    }
};

btnTranslate.onclick = async () => {
    const textToTranslate = txtTranscript.value;
    const targetLangCode = selectTranslateLang.value; 
    if (!textToTranslate.trim() || !targetLangCode) { 
        showToast('toast_translation_missing_info', 'info'); 
        return; 
    }
    setStatus('status_translating_text', true); 
    txtTranslated.value = ''; 
    try {
        const targetLanguageName = getLanguageName(targetLangCode); 
        let systemPromptContent = TRANSLATION_SYSTEM_PROMPT_TEMPLATE.replace('{targetLanguageName}', targetLanguageName);
        const vocab = localStorage.getItem('USER_VOCAB_OPENAI_PROMPT_STRING'); 
        if (vocab) systemPromptContent += `\n\nConsider the following vocabulary for proper nouns or technical terms: ${vocab}.`;
        
        const translatedText = await callOpenAIChatAPI(systemPromptContent, textToTranslate, 0.1, 'gpt-3.5-turbo'); 
        txtTranslated.value = translatedText; 
        showToast('toast_translation_success', 'success'); 
        const historyTypeKey = "history_type_translation";
        const historyType = (translations[currentLanguage]?.[historyTypeKey] || "Translation") + ` (${targetLanguageName})`; 
        addToClipboardHistory(translatedText, historyType); 
        copyTextToClipboard(translatedText, 'toast_copied_to_clipboard'); 
    } catch (error) { 
        console.error("Error during translation:", error);
    }
    finally { 
        setStatus('status_ready', false); 
    } 
};

btnCopy.onclick = () => copyTextToClipboard(txtTranscript.value);
btnClear.onclick = () => {
  txtTranscript.value = ''; 
  txtTranslated.value = ''; 
  txtSummary.value = '';
  if (txtSource) txtSource.value = ''; 
  summarizeSection.classList.add('hidden'); 
  fileNameDisplay.textContent = '';
  currentAudioBlob = null; 
  updateButtonStates(); 
  setStatus('status_ready', false);
};

btnSendEmail.onclick = () => {
    const text = txtTranscript.value;
    if (!text.trim()) { 
        showToast('email_no_text', 'info'); 
        return; 
    } 
    const subject = encodeURIComponent(translations[currentLanguage]?.email_subject_default || "Transcribed Text / Note"); 
    window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(text)}`; 
};

btnExportTxt.onclick = () => {
    const text = txtTranscript.value;
    if (!text.trim()) { 
        showToast('export_txt_no_text', 'info'); 
        return; 
    } 
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' }); 
    const link = document.createElement('a'); 
    const dateString = new Date().toISOString().slice(0,16).replace(/[-T:]/g,"");
    const downloadFileName = translations[currentLanguage]?.export_txt_filename_prefix || "transcript";
    link.download = `${downloadFileName}_${dateString}.txt`; 
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
    URL.revokeObjectURL(link.href); 
    showToast('export_txt_success', 'success'); 
};


// --- Event Listeners ---
txtTranscript.addEventListener('input', updateButtonStates);
selectTranslateLang.addEventListener('change', updateButtonStates);
historySearchInput.addEventListener('input', filterAndRenderHistory);
dateFilterFromInput.addEventListener('change', filterAndRenderHistory);
dateFilterToInput.addEventListener('change', filterAndRenderHistory);

btnLanguageToggle.addEventListener('click', (e) => { 
    e.stopPropagation(); 
    languageDropdownMenu.classList.toggle('open'); 
});
document.addEventListener('click', (e) => { 
    if (btnLanguageToggle && languageDropdownMenu && !btnLanguageToggle.contains(e.target) && !languageDropdownMenu.contains(e.target)) {
        languageDropdownMenu.classList.remove('open');
    }
});
langOptions.forEach(option => {
    option.addEventListener('click', (e) => { 
        e.preventDefault(); 
        setLanguage(option.dataset.lang); 
    });
}); 

window.addEventListener('keydown', function(event) {
    const activeModal = document.querySelector('.modal-overlay.open');
    const activeElementTag = document.activeElement ? document.activeElement.tagName : null;
    if (event.key === 'F5' && 
        !['INPUT', 'TEXTAREA'].includes(activeElementTag) &&
        !activeModal && 
        !document.getElementById('customConfirmationModal')) {
        event.preventDefault(); 
        if(btnRecord) btnRecord.click(); 
    }
    if (event.key === 'Escape') { 
        if (vocabModal && vocabModal.classList.contains('open')) closeVocabModal();
        else if (settingsModal && settingsModal.classList.contains('open')) closeSettingsModal();
        else if (historySettingsModal && historySettingsModal.classList.contains('open')) closeHistorySettingsModal();
        else if (audioFallbackModal && audioFallbackModal.classList.contains('open')) closeAudioFallbackModal();
        else {
            const confirmModal = document.getElementById('customConfirmationModal'); 
            if (confirmModal) confirmModal.remove();
        }
        if(languageDropdownMenu && languageDropdownMenu.classList.contains('open')) languageDropdownMenu.classList.remove('open');
    }
});

// --- Initial Setup ---
/**
 * Initializes the application on page load.
 */
function initializeApp() {
    try {
        initFallbackDB(); 
        const savedTheme = localStorage.getItem('AUDIO_SUITE_THEME') || 'dark-theme'; 
        applyTheme(savedTheme);
        populateAudioLanguageOptions(); 

        const savedLang = localStorage.getItem('AUDIO_SUITE_LANGUAGE') || navigator.language.split('-')[0] || 'de';
        setLanguage(savedLang); 
        
        deleteSelectedHistoryButton.onclick = deleteSelectedHistoryItems; 
        if (modalInputApiKey) modalInputApiKey.setAttribute('autocomplete', 'new-password'); 
        setStatus('status_ready', false); // Ensure initial status is set after everything else
    } catch (error) {
        console.error("Fehler während der Initialisierung der App:", error);
        // Versuchen, eine grundlegende Fehlermeldung im UI anzuzeigen, falls möglich
        const body = document.body;
        if (body) {
            body.innerHTML = `<div style="padding: 20px; text-align: center; font-family: sans-serif; color: red;">
                                <h1>Ein Fehler ist aufgetreten</h1>
                                <p>Die Anwendung konnte nicht korrekt initialisiert werden. Bitte versuchen Sie, die Seite neu zu laden oder überprüfen Sie die Browser-Konsole für Details.</p>
                              </div>`;
        }
    }
}

// Start the application
initializeApp();



// --- Audio conversion to 16k WAV ---
async function convertWebMToWav16k(webmBlob) {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const arrayBuffer = await webmBlob.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const offlineCtx = new OfflineAudioContext(1, audioBuffer.duration * 16000, 16000);
    const source = offlineCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(offlineCtx.destination);
    source.start();
    const rendered = await offlineCtx.startRendering();
    return encodeWAV(rendered);
}

function encodeWAV(buffer) {
    const sampleRate = buffer.sampleRate;
    const samples = buffer.getChannelData(0);
    const bufferLength = 44 + samples.length * 2;
    const view = new DataView(new ArrayBuffer(bufferLength));

    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + samples.length * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, samples.length * 2, true);

    let offset = 44;
    for (let i = 0; i < samples.length; i++, offset += 2) {
        const s = Math.max(-1, Math.min(1, samples[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
    return new Blob([view], { type: 'audio/wav' });
}

function writeString(dataview, offset, str) {
    for (let i = 0; i < str.length; i++) {
        dataview.setUint8(offset + i, str.charCodeAt(i));
    }
}
