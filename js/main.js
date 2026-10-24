/**
 * Sri Lanka Post (Department of Posts) - Official Redesign
 * Main JavaScript Controller
 * No frameworks, pure Vanilla JS
 */

// Configuration constants
const WHATSAPP_NUMBER = '94112328301'; // TODO: verify official WhatsApp number
const AUTO_SLIDE_INTERVAL = 3500; // 3.5 seconds auto-transition
const NOTIF_INTERVAL = 5000;

/* ==========================================================================
   1. Multi-language Translations Dictionary
   ========================================================================== */

/* NEEDS NATIVE REVIEW: Sinhala and Tamil translations provided for university assignment prototype; requires native speaker editorial review before production deployment. */
const translations = {
  en: {
    // Accessibility & Page Meta
    skip_to_content: "Skip to main content",
    page_title_home: "Sri Lanka Post | Official Department of Posts Portal",
    page_title_services: "Postal & Financial Services | Sri Lanka Post",
    page_title_about: "About Us | Sri Lanka Post - Department of Posts",
    page_title_info: "Information & Resources | Sri Lanka Post",
    page_title_contact: "Contact Us | Sri Lanka Post - Department of Posts",
    page_title_notices: "Notices, Procurement & Vacancies | Sri Lanka Post",
    page_title_coming: "Under Construction | Sri Lanka Post",

    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_about_vision: "Vision and Mission",
    nav_about_insights: "Our Insights",
    nav_about_functions: "Major Functions",
    nav_about_history: "Our History",
    nav_about_team: "Our Team",
    nav_services: "Services",
    nav_info: "Information",
    nav_media: "Media Gallery",
    nav_notices: "Notices",
    nav_notices_public: "Public Notices",
    nav_notices_procurement: "Procurement",
    nav_notices_vacancies: "Vacancies",
    nav_notices_reports: "Reports",
    nav_contact: "Contact Us",
    nav_alerts_label: "Alerts",
    nav_pause_alert: "Pause alerts ticker",
    nav_play_alert: "Play alerts ticker",

    // Home Hero Slides
    hero1_title: "Sri Lanka Post",
    hero1_desc: "Serving the nation since 1798 with unwavering trust and nationwide connectivity.",
    hero1_btn_services: "Our services",
    hero1_btn_track: "Track an item",

    hero2_title: "Delivered to your doorstep",
    hero2_desc: "Letters and parcels handled with utmost care and island-wide speed.",
    hero2_btn_domestic: "Domestic mail",

    hero3_title: "Reaching every village",
    hero3_desc: "A computerized post office within reach of every community across all 9 provinces.",
    hero3_btn_find: "Find a post office",

    // Services Hero Slides
    shero1_title: "Cash on Delivery",
    shero1_desc: "Fast, secure e-commerce parcel logistics with doorstep cash collection.",
    shero2_title: "Domestic Mail",
    shero2_desc: "Connecting every citizen with reliable ordinary and registered letter delivery.",
    shero3_title: "International Mail",
    shero3_desc: "Global mail forwarding and cargo transit connecting Sri Lanka to over 190 countries.",
    shero4_title: "Money Transfer",
    shero4_desc: "Swift and secure electronic money orders accessible at every postal counter.",
    shero_btn_learn: "Learn more",

    // Section Titles
    section_core_services: "Our core services",
    section_core_services_sub: "Reliable, accessible postal, financial and administrative services across Sri Lanka.",
    group_send_receive: "Send and receive",
    group_pay: "Pay",
    group_money_protect: "Money and protection",
    group_messages_products: "Messages and products",

    // 15 Core Services
    srv1_title: "Normal Post (Domestic Mail)",
    srv1_desc: "Affordable letter and small package delivery reaching every street and village across the island.",
    srv2_title: "International Post",
    srv2_desc: "Air and surface postal delivery linking Sri Lankan citizens and businesses to overseas destinations worldwide.",
    srv3_title: "Money Transfer",
    srv3_desc: "Safe, rapid electronic and ordinary money order transfers redeemable at any post office counter.",
    srv4_title: "EMS Speed Post",
    srv4_desc: "Premium, priority express courier delivery with guaranteed transit times and online barcode tracking.",
    srv5_title: "Cash on Delivery (COD)",
    srv5_desc: "Seamless fulfillment for e-commerce vendors with recipient payment collection right at their doorstep.",
    srv6_title: "SL Post Courier",
    srv6_desc: "Dedicated parcel courier network designed for rapid corporate packages and personal logistics.",
    srv7_title: "Bill Payments",
    srv7_desc: "One-stop counter for settling electricity, water, telecom, and municipal utility bills conveniently.",
    srv8_title: "ETF / EPF Payments",
    srv8_desc: "Authorized processing and acceptance of statutory retirement and provident fund contributions.",
    srv9_title: "Exam Fee Payments",
    srv9_desc: "Hassle-free fee payments for Department of Examinations and civil service selection tests.",
    srv10_title: "Social Services",
    srv10_desc: "Disbursement of government elder allowances, disability benefits, and community welfare payments.",
    srv11_title: "Bank Services",
    srv11_desc: "Agency banking facilities including National Savings Bank (NSB) transactions at selected postal counters.",
    srv12_title: "e-Telemail",
    srv12_desc: "Swift electronic message dispatch converted into physical printed letters for immediate recipient delivery.",
    srv13_title: "Pila Pila Tele Products",
    srv13_desc: "Value-added telecommunication accessories and consumer electronics available at postal retail outlets.",
    srv14_title: "Postal Insurance",
    srv14_desc: "Comprehensive postal transit insurance protecting your valuable registered parcels against loss or damage.",
    srv15_title: "Vehicle Traffic Fines",
    srv15_desc: "Direct payment of Sri Lanka Police spot fines and traffic penalties at any computerized postal counter.",
    card_cta: "Learn more",

    // Footer
    footer_tagline: "Connecting every Sri Lankan, every day.",
    footer_address: "No. 310, D.R. Wijewardena Mawatha, Colombo 01000, Sri Lanka",
    footer_hotline: "Hotline: 1950",
    footer_email: "info@slpost.lk",
    footer_col_about: "About Us",
    footer_col_services: "Services",
    footer_col_info: "Information",
    footer_col_media: "Media Gallery",
    footer_col_notices: "Notices",
    footer_col_contact: "Contact Us",
    footer_postal_rates: "Rates & Tariffs",
    footer_postal_codes: "Postal Codes",
    footer_track: "Track & Trace",
    footer_faq: "FAQs",
    footer_forms: "Download Forms",
    footer_copyright: "Department of Posts, Sri Lanka. All Rights Reserved.",
    footer_social_label: "Official Social Channels:",

    // Chatbot (AI Assistant)
    chat_title: "Ask Sri Lanka Post",
    chat_badge: "AI Assistant",
    chat_welcome: "Hello! Welcome to the Sri Lanka Post assistant. How can I help you today?",
    chat_q1: "How do I track an item?",
    chat_q2: "How can I contact you?",
    chat_q3: "Which payments can I make at a post office?",
    chat_q4: "How do I send a parcel abroad?",
    chat_q5: "Where is my nearest post office?",
    chat_a1: "You can track domestic and international registered articles using our online tracking tool. Please have your 13-character tracking number ready or visit your local post office.",
    chat_a2: "You can reach Sri Lanka Post via our national hotline at 1950, email us at info@slpost.lk, or visit the General Post Office in Colombo 01000.",
    chat_a3: "You can pay utility bills (electricity, water, telecom), government fees, traffic fines, and exam fees at any computerized post office island-wide.",
    chat_a4: "For overseas parcels, choose between Air Mail, Surface Mail, or EMS Speed Post. Complete a customs declaration form (CN22/CN23) at your post office counter.",
    chat_a5: "With over 4,000 post offices and sub-post offices across all 9 provinces, there is a counter within reach of every community. Call 1950 for directions to your nearest branch.",
    chat_footer_note: "University assignment prototype demo assistant.",

    // Hotline Menu
    hotline_menu_title: "Quick Contact Options",
    hotline_call_btn: "Call hotline 1950",
    hotline_wa_btn: "Get alerts on WhatsApp",

    // Coming Soon Page
    coming_soon_badge: "Department Portal",
    coming_soon_title: "Page Under Construction",
    coming_soon_desc: "This section is currently being developed as part of the Sri Lanka Post university redesign project. Please check back soon or visit our services page.",
    coming_soon_btn: "Return to Home",
    breadcrumb_home: "Home",
    breadcrumb_services: "Services",
    breadcrumb_about: "About Us",
    breadcrumb_info: "Information",
    breadcrumb_contact: "Contact Us",
    breadcrumb_notices: "Notices",
    breadcrumb_coming: "Under Construction",

    // About Page - Banner
    about_banner_title: "About Us",
    about_banner_sub: "Serving the nation since 1798.",
    about_pill_vision: "Vision and Mission",
    about_pill_insights: "Our Insights",
    about_pill_functions: "Major Functions",

    // About Page - Vision & Mission
    about_vision_heading: "VISION",
    about_vision_text: "Become the partner of excellence in relations, by providing innovative and diverse service.",
    about_mission_heading: "MISSION",
    about_mission_text: "To provide a highly innovative, efficient and reliable postal service utilizing motivated staff and modern technology in a pleasant work environment to maximize customer satisfaction while adhering to the standards of the Universal Postal Union and upholding the policies of the Government of Sri Lanka.",
    about_pill_innovative: "Innovative",
    about_pill_efficient: "Efficient",
    about_pill_reliable: "Reliable",

    // About Page - Insights
    about_insights_heading: "Our insights in numbers",
    about_insights_intro: "Over two centuries of nationwide presence and dedicated service.",
    about_kpi1_label: "Years of service",
    about_kpi1_caption: "Since 1798, when it began with five offices in the Maritime Provinces.",
    about_kpi2_label: "Post offices",
    about_kpi2_caption: "Across the island. Source: 2024 Progress Report.",
    about_kpi3_label: "Employees",
    about_kpi3_caption: "A dedicated island-wide workforce.",
    about_kpi4_prefix: "Nearly",
    about_kpi4_suffix: "million",
    about_kpi4_label: "People served",
    about_kpi4_caption: "Across Sri Lanka.",
    about_net_title: "Our network",
    about_net_caption: "In 2004 there was one post office for every 2,400 people, an office within every 14 km.",
    about_net_main: "Post Offices",
    about_net_sub: "Sub Post Offices",
    about_net_agency: "Agency Post Offices",
    about_net_badge: "4,138 Total Offices",

    // About Page - Major Functions
    about_fn_heading: "Major functions",
    about_fn_intro: "How Sri Lanka Post delivers on its mission.",
    about_tab1_title: "Service excellence",
    about_tab2_title: "Technology and modernisation",
    about_tab3_title: "People and culture",
    about_tab4_title: "Growth and reach",
    about_tab5_title: "Governance and standing",
    about_items_suffix: "items",

    // Major Functions - Group 1: Service excellence
    about_fn_1_1: "Provision of an efficient and reliable service in tandem with all stakeholders as a team under any environmental and social condition, under the guidance of the leadership and the promotion of income.",
    about_fn_1_2: "Converting the postal service, which has earned the confidence of the consumer by providing a door-to-door service, into a more qualitative and efficient service by employing modern marketing strategies.",
    about_fn_1_3: "Making the consumer delighted by offering services in a pleasing and attractive office environment.",
    about_fn_1_4: "With the dawn of peace, promoting postal services by effectively deploying the skilled workforce in communication and social welfare activities.",

    // Major Functions - Group 2: Technology and modernisation
    about_fn_2_1: "Formulation and implementation of a strategic plan focused on the new technological market that advances the cause of the postal service in collaboration with the relevant stakeholders.",
    about_fn_2_2: "Achieving institutional improvement by the optimum use of technology with local and foreign assistance.",
    about_fn_2_3: "Enhancing the quality and effectiveness of services provided by making use of rapidly developing infrastructure facilities.",
    about_fn_2_4: "Introducing a viable and transparent technology-based audit and investigation system agreeable to all.",

    // Major Functions - Group 3: People and culture
    about_fn_3_1: "Bringing about an attitudinal change for the provision of a dignified service, updating intrinsic value systems of Sri Lanka Post as a flagship communication entity of the state sector.",
    about_fn_3_2: "Deploying disciplined staff empowered by continuous training and a system of methodical performance appraisal in such a way as to consolidate public trust.",
    about_fn_3_3: "Motivating the staff by implementing a methodical promotion procedure and transfer system for the provision of quality and efficient consumer service.",
    about_fn_3_4: "Gainfully employing the creative contribution of trade unions for the betterment of the institution and establishing industrial peace.",

    // Major Functions - Group 4: Growth and reach
    about_fn_4_1: "Becoming the best postal hub of South Asia by providing a more efficient service through proper study of work, income-based grading and employee motivation.",
    about_fn_4_2: "Making the post office network a commercial centre providing multi-purpose services that can attract tourists and win public trust.",
    about_fn_4_3: "Efficiently employing the support services, making timely and forthright decisions with the relevant parties, while innovatively absorbing the advantages of the rapidly growing advertising market.",
    about_fn_4_4: "Expanding the postal service to satisfy the needs of Sri Lankans living abroad.",
    about_fn_4_5: "Taking Sri Lankan identity to the international arena by propagating the hobby of philately within the country and overseas.",

    // Major Functions - Group 5: Governance and standing
    about_fn_5_1: "Sri Lanka Post, which holds membership of the Universal Postal Union, has won public trust and is equipped with an island-wide network, conquering the technology-based competitive market.",
    about_fn_5_2: "Formulating laws that ensure the monopoly in the delivery of letters and give a competitive edge and efficient acceptance, transportation and distribution of postal items.",
    about_fn_5_3: "Gaining competitive advantage by reorganising the organisational structure and formulating the relevant laws.",

    // About Page - Closing Band
    about_cta_heading: "Explore what we offer",
    about_cta_services: "Our services",
    about_cta_contact: "Contact us",

    // Information Page - Banner & Nav
    info_banner_title: "Information & Public Resources",
    info_banner_sub: "Access official postal tariffs, postcodes directory, administrative forms, safety regulations, and Right to Information (RTI) records.",
    info_search_placeholder: "Search postal codes, forms, rates, or regulations...",
    info_pill_codes: "Postal Codes",
    info_pill_rates: "Rates & Tariffs",
    info_pill_forms: "Download Forms",
    info_pill_prohibited: "Prohibited Articles",
    info_pill_rti: "Right to Information",
    info_pill_standards: "Delivery Standards",

    // Information Page - Quick Reference Hub
    info_hub_heading: "Postal Resource Hub",
    info_hub_intro: "Select a department resource to explore official guidelines, tools, and downloadable publications.",
    info_card_codes_title: "Postal Codes Directory",
    info_card_codes_desc: "Look up 5-digit postal zoning codes across all 9 provinces and 25 administrative districts.",
    info_card_codes_btn: "Find Postal Code",
    info_card_rates_title: "Postage Rates & Tariffs",
    info_card_rates_desc: "Current official price schedules for domestic letters, overseas airmail, and EMS courier items.",
    info_card_rates_btn: "View Rate Tables",
    info_card_forms_title: "Downloadable Forms",
    info_card_forms_desc: "Official application forms for private post boxes, postal ID cards, and international customs.",
    info_card_forms_btn: "Browse Forms",
    info_card_prohibited_title: "Prohibited & Restricted",
    info_card_prohibited_desc: "Essential mail safety guidelines, dangerous goods classifications, and packaging limits.",
    info_card_prohibited_btn: "Safety Guidelines",
    info_card_rti_title: "Right to Information (RTI)",
    info_card_rti_desc: "Transparency portal under Act No. 12 of 2016 with designated officers and RTI 01 request formats.",
    info_card_rti_btn: "RTI Information",
    info_card_charter_title: "Citizen Delivery Charter",
    info_card_charter_desc: "Island-wide delivery timelines, tracking commitments, and grievance escalation via hotline 1950.",
    info_card_charter_btn: "View Standards",

    // Information Page - Postal Codes Section
    info_codes_heading: "Postal Codes Directory (Postcodes)",
    info_codes_intro: "Sri Lanka Post uses a 5-digit postal zoning system to accelerate automated sorting and eliminate misdirection.",
    info_codes_search_label: "Filter by city, town, district, or code:",
    info_codes_th_code: "Postal Code",
    info_codes_th_office: "Post Office / Branch",
    info_codes_th_district: "District",
    info_codes_th_province: "Province",
    info_codes_copy_btn: "Copy",
    info_codes_copied: "Copied!",

    // Information Page - Rates & Tariffs Section
    info_rates_heading: "Postage Rates & Tariff Schedules",
    info_rates_intro: "Official rates revised under Gazette Extraordinary notifications. Accurate for all computerized counters.",
    info_tab_inland: "Domestic Mail",
    info_tab_international: "International Airmail",
    info_tab_ems: "EMS Speed Post",
    info_tab_financial: "Financial & Agency Fees",

    // Information Page - Forms Section
    info_forms_heading: "Official Downloadable Forms",
    info_forms_intro: "Download official departmental applications in PDF format. Submit completed forms at any post office counter.",
    info_form_btn_download: "Download PDF",

    // Information Page - Prohibited Articles Section
    info_prohibited_heading: "Prohibited & Restricted Articles",
    info_prohibited_intro: "In compliance with Universal Postal Union and Sri Lanka Customs regulations, hazardous and restricted items are governed strictly.",
    info_strictly_prohibited_title: "Strictly Prohibited Items",
    info_restricted_title: "Conditionally Restricted Items",
    info_packaging_rules_title: "Packaging & Dimension Standards",

    // Information Page - RTI Section
    info_rti_heading: "Right to Information (RTI Act No. 12 of 2016)",
    info_rti_intro: "The Department of Posts upholds proactive transparency, integrity, and citizen empowerment under the RTI Act.",
    info_rti_designated_title: "Designated Officer",
    info_rti_officers_title: "Information Officers",
    info_rti_process_title: "RTI Request Procedure",
    info_rti_download_btn: "Download RTI 01 Form",

    // Information Page - Delivery Standards Section
    info_charter_heading: "Citizen Delivery Charter",
    info_charter_intro: "Delivery targets and customer service commitments across the island network.",

    // Contact Page Content
    contact_banner_title: "Contact Sri Lanka Post",
    contact_banner_sub: "We are here to assist you. Connect with our headquarters, provincial directorates, 24/7 postal services, or submit an official citizen inquiry.",
    contact_pill_hq: "Headquarters",
    contact_pill_officials: "Key Officials",
    contact_pill_provincial: "Provincial Offices",
    contact_pill_form: "Send Inquiry",
    contact_pill_faq: "Direct Lines",

    contact_card_hq_title: "Postal Headquarters",
    contact_card_hq_addr: "No. 310, D.R. Wijewardena Mawatha, Colombo 10, 00100, Sri Lanka",
    contact_card_hotline_title: "Customer Care Hotline 1950",
    contact_card_hotline_desc: "Toll-free across all mobile and fixed-line networks in Sri Lanka. Dedicated for postal inquiries, EMS courier tracking, and feedback.",
    contact_card_hours_title: "Opening Hours & Counters",
    contact_card_hours_desc: "Administrative Offices: Mon – Fri 8:30 AM – 4:30 PM. Colombo GPO 24/7 Continuous Counter Service open 365 days.",
    contact_card_wa_title: "Official WhatsApp Support",
    contact_card_wa_desc: "Message our digital customer service team for quick tracking updates and postal tariff inquiries.",

    contact_executives_title: "Departmental Directorate & Key Contacts",
    contact_executives_sub: "Direct administrative contact lines for key executive divisions at Postal Headquarters, Colombo.",
    contact_provincial_title: "Provincial Postal Directorates",
    contact_provincial_sub: "Regional operational headquarters overseeing postal offices and delivery networks across all 9 provinces.",

    contact_form_title: "Citizen Online Inquiry & Grievance Desk",
    contact_form_sub: "Submit your inquiry, feedback, or service complaint directly to our centralized desk. You will receive an official tracking ticket.",
    contact_form_name: "Full Name",
    contact_form_email: "Email Address",
    contact_form_phone: "Phone / Mobile Number",
    contact_form_category: "Inquiry Category",
    contact_form_cat_general: "General Inquiry",
    contact_form_cat_tracking: "Parcel & Mail Tracking",
    contact_form_cat_ems: "EMS Speed Post Courier",
    contact_form_cat_financial: "Money Order & Bill Payments",
    contact_form_cat_philatelic: "Philatelic Bureau & Stamps",
    contact_form_cat_complaint: "Public Complaint / Grievance",
    contact_form_subject: "Subject",
    contact_form_message: "Your Message / Details",
    contact_form_submit: "Submit Official Inquiry",
    contact_form_note: "Official response provided within 2-3 business days under the Department Citizen Charter.",

    // Notices Page Content
    notices_banner_title: "Notices, Procurement & Vacancies",
    notices_banner_sub: "Official publications of the Department of Posts: public security alerts, national procurement tenders, supplier registrations, and career vacancies.",
    notices_filter_all: "All Announcements",
    notices_filter_public: "Public Alerts",
    notices_filter_procurement: "Procurement & Tenders",
    notices_filter_vacancies: "Vacancies & Recruitment",
    notices_filter_reports: "Performance Reports",
    notices_search_placeholder: "Search notices by keyword, title, or reference number...",
    notices_btn_download: "Download Gazette / PDF",
    notices_btn_details: "View Notice",
    notices_badge_urgent: "Urgent Alert",
    notices_badge_tender: "Active Tender",
    notices_badge_career: "Recruitment",
    notices_badge_report: "Audit Report"
  },

  si: {
    // Accessibility & Page Meta
    skip_to_content: "ප්‍රධාන අන්තර්ගතය වෙත යන්න",
    page_title_home: "ශ්‍රී ලංකා තැපෑල | නිල තැපැල් දෙපාර්තමේන්තු ද්වාරය",
    page_title_services: "තැපැල් සහ මූල්‍ය සේවාවන් | ශ්‍රී ලංකා තැපෑල",
    page_title_about: "අප පිළිබඳව | ශ්‍රී ලංකා තැපෑල - තැපැල් දෙපාර්තමේන්තුව",
    page_title_info: "තොරතුරු සහ සම්පත් | ශ්‍රී ලංකා තැපෑල",
    page_title_contact: "අප අමතන්න | ශ්‍රී ලංකා තැපෑල - තැපැල් දෙපාර්තමේන්තුව",
    page_title_notices: "නිවේදන, ප්‍රසම්පාදන සහ පුරප්පාඩු | ශ්‍රී ලංකා තැපෑල",
    page_title_coming: "සකස් වෙමින් පවතී | ශ්‍රී ලංකා තැපෑල",

    // Navigation
    nav_home: "මුල් පිටුව",
    nav_about: "අප ගැන",
    nav_about_vision: "දැක්ම සහ මෙහෙවර",
    nav_about_insights: "අපගේ දත්ත හා ප්‍රගතිය",
    nav_about_functions: "ප්‍රධාන කාර්යයන්",
    nav_about_history: "අපේ ඉතිහාසය",
    nav_about_team: "අපේ කණ්ඩායම",
    nav_services: "සේවාවන්",
    nav_info: "තොරතුරු",
    nav_media: "මාධ්‍ය ගැලරිය",
    nav_notices: "නිවේදන",
    nav_notices_public: "මහජන නිවේදන",
    nav_notices_procurement: "ප්‍රසම්පාදන",
    nav_notices_vacancies: "පුරප්පාඩු",
    nav_notices_reports: "වාර්තා",
    nav_contact: "සම්බන්ධ වන්න",
    nav_alerts_label: "දැනුම්දීම්",
    nav_pause_alert: "දැනුම්දීම් නවත්වන්න",
    nav_play_alert: "දැනුම්දීම් ධාවනය කරන්න",

    // Home Hero Slides
    hero1_title: "ශ්‍රී ලංකා තැපෑල",
    hero1_desc: "1798 සිට නොසැලෙන විශ්වාසය සහ රටපුරා සබඳතාවයෙන් යුතුව ජාතියට සේවය සලසයි.",
    hero1_btn_services: "අපගේ සේවාවන්",
    hero1_btn_track: "භාණ්ඩයක් සොයන්න",

    hero2_title: "ඔබේ දොරකඩටම බෙදාහැරීම",
    hero2_desc: "ලිපි සහ පාර්සල් අතිශය සුරක්ෂිතභාවයෙන් හා කඩිනමින් දිවයින පුරා බෙදාහැරේ.",
    hero2_btn_domestic: "දේශීය තැපැල්",

    hero3_title: "සෑම ගමකටම ළඟාවෙමු",
    hero3_desc: "පළාත් 9 ම ආවරණය කරමින් සෑම ප්‍රජාවකටම සමීපව පිහිටි පරිගණකගත තැපැල් කාර්යාල පද්ධතියක්.",
    hero3_btn_find: "තැපැල් කාර්යාලයක් සොයන්න",

    // Services Hero Slides
    shero1_title: "ලැබුණු පසු ගෙවීම් (COD)",
    shero1_desc: "දොරකඩදීම මුදල් එකතු කිරීමේ පහසුකම සහිත විශ්වාසනීය ඊ-වාණිජ්‍ය පාර්සල් සේවාව.",
    shero2_title: "දේශීය තැපෑල",
    shero2_desc: "සාමාන්‍ය සහ ලියාපදිංචි ලිපි බෙදාහැරීමේ විශ්වාසනීය ජාතික සේවාව.",
    shero3_title: "ජාත්‍යන්තර තැපෑල",
    shero3_desc: "ලොව පුරා රටවල් 190 කට අධික ප්‍රමාණයක් සමඟ ශ්‍රී ලංකාව සම්බන්ධ කරන විශ්වාසනීය සේවාව.",
    shero4_title: "මුදල් හුවමාරුව",
    shero4_desc: "ඕනෑම තැපැල් කවුළුවකින් ලබාගත හැකි කඩිනම් සහ ආරක්ෂිත විද්‍යුත් මුදල් ඇණවුම් සේවාව.",
    shero_btn_learn: "වැඩිදුර තොරතුරු",

    // Section Titles
    section_core_services: "අපගේ ප්‍රධාන සේවාවන්",
    section_core_services_sub: "ශ්‍රී ලංකාව පුරා පුරවැසියන් සහ ව්‍යාපාර සඳහා විශ්වාසනීය තැපැල්, මූල්‍ය සහ පරිපාලන සේවාවන්.",
    group_send_receive: "යැවීම සහ ලබාගැනීම",
    group_pay: "ගෙවීම්",
    group_money_protect: "මූල්‍ය සහ ආරක්ෂණය",
    group_messages_products: "පණිවිඩ සහ නිෂ්පාදන",

    // 15 Core Services
    srv1_title: "සාමාන්‍ය තැපෑල (දේශීය තැපැල්)",
    srv1_desc: "දිවයින පුරා සෑම නිවසකටම සහ ගමකටම ලඟා වන දැරිය හැකි ලිපි හා පාර්සල් බෙදාහැරීම.",
    srv2_title: "ජාත්‍යන්තර තැපෑල",
    srv2_desc: "ලොව පුරා රටවල් වෙත ගුවන් සහ මුහුදු මාර්ග ඔස්සේ විශ්වාසනීය තැපැල් හුවමාරුව.",
    srv3_title: "මුදල් හුවමාරුව",
    srv3_desc: "ඕනෑම තැපැල් කවුළුවකින් ලබාගත හැකි වේගවත් සහ සුරක්ෂිත මුදල් ඇණවුම් පහසුකම.",
    srv4_title: "EMS වේග තැපෑල",
    srv4_desc: "තීරු කේත ඔස්සේ සජීවීව නිරීක්ෂණය කළ හැකි කඩිනම් ප්‍රමුඛතා කුරියර් සේවාව.",
    srv5_title: "භාණ්ඩ ලැබුණු පසු මුදල් ගෙවීම (COD)",
    srv5_desc: "ඊ-වාණිජ්‍ය ව්‍යාපාර සඳහා දොරකඩදීම පාරිභෝගික මුදල් අයකර ගැනීමේ පහසු සේවාව.",
    srv6_title: "ශ්‍රී ලංකා පෝස්ට් කුරියර්",
    srv6_desc: "ආයතනික සහ පුද්ගලික පාර්සල් ක්ෂණිකව ප්‍රවාහනය කිරීම සඳහා වූ විශේෂිත ජාලය.",
    srv7_title: "බිල්පත් ගෙවීම්",
    srv7_desc: "විදුලි, ජල, දුරකථන සහ රාජ්‍ය ගාස්තු එක් තැනකින් පහසුවෙන් ගෙවීමේ පහසුකම.",
    srv8_title: "සේවා නියුක්තිකයන්ගේ භාර අරමුදල් (ETF/EPF)",
    srv8_desc: "නීතිප්‍රකාර විශ්‍රාම සහ අර්ථසාධක අරමුදල් දායකත්වයන් භාරගැනීමේ බලයලත් මධ්‍යස්ථානය.",
    srv9_title: "විභාග ගාස්තු ගෙවීම්",
    srv9_desc: "විභාග දෙපාර්තමේන්තුවේ සියලුම විභාග ගාස්තු පහසුවෙන් කවුන්ටරය හරහා ගෙවීමේ පහසුකම.",
    srv10_title: "සමාජ සත්කාර සේවා",
    srv10_desc: "වැඩිහිටි දීමනා, ආබාධිත ආධාර සහ රජයේ සුභසාධන ගෙවීම් නිවැරදිව බෙදාහැරීම.",
    srv11_title: "බැංකු සේවාවන්",
    srv11_desc: "තෝරාගත් තැපැල් කාර්යාල මගින් ජාතික ඉතිරි කිරීමේ බැංකු (NSB) ගනුදෙනු පහසුකම්.",
    srv12_title: "ඊ-ටෙලිමේල් (e-Telemail)",
    srv12_desc: "විද්‍යුත් පණිවිඩ මුද්‍රිත ලිපි බවට පත්කර කඩිනමින් ලිපිනය වෙත ගෙනගොස් භාරදීම.",
    srv13_title: "පිළ පිළ ටෙලි නිෂ්පාදන",
    srv13_desc: "තැපැල් අලෙවිසැල් මඟින් ලබාගත හැකි විදුලි සංදේශ උපාංග සහ පාරිභෝගික ඉලෙක්ට්‍රොනික උපකරණ.",
    srv14_title: "තැපැල් රක්ෂණය",
    srv14_desc: "ඔබගේ වටිනා පාර්සල් හා ලියාපදිංචි අයිතම සඳහා වන පූර්ණ සංක්‍රමණික රක්ෂණ ආවරණය.",
    srv15_title: "රථවාහන දඩ ගෙවීම්",
    srv15_desc: "පොලිස් රථවාහන දඩ පත්‍රිකා ඕනෑම පරිගණකගත තැපැල් කාර්යාලයකින් සෘජුව ගෙවීමේ හැකියාව.",
    card_cta: "වැඩිදුර තොරතුරු",

    // Footer
    footer_tagline: "සෑම ශ්‍රී ලාංකිකයෙකුම දිනපතා එකිනෙක යා කරමින්.",
    footer_address: "නො. 310, ඩී.ආර්. විජේවර්ධන මාවත, කොළඹ 01000, ශ්‍රී ලංකාව",
    footer_hotline: "ක්ෂණික ඇමතුම්: 1950",
    footer_email: "info@slpost.lk",
    footer_col_about: "අප ගැන",
    footer_col_services: "සේවාවන්",
    footer_col_info: "තොරතුරු",
    footer_col_media: "මාධ්‍ය ගැලරිය",
    footer_col_notices: "නිවේදන",
    footer_col_contact: "සම්බන්ධ වන්න",
    footer_postal_rates: "ගාස්තු ලේඛනය",
    footer_postal_codes: "තැපැල් කේත",
    footer_track: "භාණ්ඩ සෙවීම",
    footer_faq: "නිතර අසන ප්‍රශ්න",
    footer_forms: "පෝරම බාගත කිරීම",
    footer_copyright: "තැපැල් දෙපාර්තමේන්තුව, ශ්‍රී ලංකාව. සියලුම හිමිකම් ඇවිරිණි.",
    footer_social_label: "නිල සමාජ මාධ්‍ය නාලිකා:",

    // Chatbot (AI Assistant)
    chat_title: "ශ්‍රී ලංකා තැපෑල සහායක",
    chat_badge: "AI සහායක",
    chat_welcome: "ආයුබෝවන්! ශ්‍රී ලංකා තැපැල් සහායක වෙත සාදරයෙන් පිළිගනිමු. අද ඔබට මා කෙසේ සහය විය යුතුද?",
    chat_q1: "භාණ්ඩයක් සොයාගන්නේ කෙසේද?",
    chat_q2: "අපව සම්බන්ධ කරගන්නේ කෙසේද?",
    chat_q3: "තැපැල් කාර්යාලයෙන් කළ හැකි ගෙවීම් මොනවාද?",
    chat_q4: "විදේශයකට පාර්සලයක් යවන්නේ කෙසේද?",
    chat_q5: "ළඟම ඇති තැපැල් කාර්යාලය කොහිද?",
    chat_a1: "අපගේ අන්තර්ජාල ලුහුබැඳීමේ සේවාව මගින් අක්ෂර 13 කේතය ඇතුළත් කර භාණ්ඩයේ තත්ත්වය දැනගත හැක.",
    chat_a2: "1950 ක්ෂණික ඇමතුම් අංකය, info@slpost.lk විද්‍යුත් තැපෑල හෝ කොළඹ ප්‍රධාන තැපැල් කාර්යාලය අමතන්න.",
    chat_a3: "විදුලි, ජල, දුරකථන බිල්පත්, රථවාහන දඩ සහ විභාග ගාස්තු ඕනෑම පරිගණකගත තැපැල් කාර්යාලයකින් ගෙවිය හැක.",
    chat_a4: "ගුවන් හෝ මුහුදු තැපැල් මගින් යැවිය හැක. තැපැල් කවුළුවෙන් CN22/CN23 රේගු ප්‍රකාශන පෝරමය පුරවා භාරදෙන්න.",
    chat_a5: "දිවයින පුරා තැපැල් කාර්යාල 4,000 කට අධික ප්‍රමාණයක් ක්‍රියාත්මක වේ. ළඟම ස්ථානය සඳහා 1950 අමතන්න.",
    chat_footer_note: "විශ්වවිද්‍යාල පැවරුම් මූලාකෘති ආදර්ශන සහායක.",

    // Hotline Menu
    hotline_menu_title: "ක්ෂණික සබඳතා",
    hotline_call_btn: "1950 ක්ෂණික ඇමතුම්",
    hotline_wa_btn: "WhatsApp මඟින් තොරතුරු",

    // Coming Soon Page
    coming_soon_badge: "දෙපාර්තමේන්තු ද්වාරය",
    coming_soon_title: "පිටුව සකස් වෙමින් පවතී",
    coming_soon_desc: "මෙම කොටස ශ්‍රී ලංකා තැපැල් වෙබ් අඩවි ප්‍රතිනිර්මාණ විශ්වවිද්‍යාල පැවරුමේ කොටසක් ලෙස සංවර්ධනය කෙරේ. කරුණාකර අපගේ සේවා පිටුව බලන්න.",
    coming_soon_btn: "මුල් පිටුවට යන්න",
    breadcrumb_home: "මුල් පිටුව",
    breadcrumb_services: "සේවාවන්",
    breadcrumb_about: "අප පිළිබඳව",
    breadcrumb_info: "තොරතුරු",
    breadcrumb_contact: "අප අමතන්න",
    breadcrumb_notices: "නිවේදන",
    breadcrumb_coming: "සකස් වෙමින් පවතී",

    // About Page - Banner
    about_banner_title: "අප පිළිබඳව",
    about_banner_sub: "1798 සිට ජාතියට සේවය සලසමින්.",
    about_pill_vision: "දැක්ම සහ මෙහෙවර",
    about_pill_insights: "අපගේ දත්ත හා ප්‍රගතිය",
    about_pill_functions: "ප්‍රධාන කාර්යයන්",

    // About Page - Vision & Mission (Official verbatim from slpost.gov.lk)
    about_vision_heading: "දැක්ම",
    about_vision_text: "නව්‍ය හා විවිධාංගීකරණය වූ සේවාවන් සැපයීම හරහා සබඳතා ක්ෂේත්‍රයේ විශිෂ්ටත්වයේ හවුල්කරු බවට පත්වීම.",
    about_mission_heading: "මෙහෙවර",
    about_mission_text: "ශ්‍රී ලංකා රජයේ ප්‍රතිපත්තිවලට අනුගත වෙමින් සහ විශ්ව තැපැල් සංගමයේ ප්‍රමිතීන් ආරක්ෂා කරමින්, ප්‍රීතිමත් සේවා වටපිටාවක, අභිප්‍රේරිත කාර්ය මණ්ඩලයක් සහ නවීන තාක්ෂණය උපයෝගී කරගනිමින් පාරිභෝගික තෘප්තිය උපරිම මට්ටමකට ගෙන ඒම සඳහා ඉතා නව්‍ය, කාර්යක්ෂම සහ විශ්වාසදායක තැපැල් සේවයක් සැපයීම.",
    about_pill_innovative: "නව්‍යශීලී",
    about_pill_efficient: "කාර්යක්ෂම",
    about_pill_reliable: "විශ්වාසදායක",

    // About Page - Insights
    about_insights_heading: "අපගේ ප්‍රගතිය සංඛ්‍යාත්මකව",
    about_insights_intro: "සියවස් දෙකකට වැඩි කාලයක් පුරා දිවයින පුරා පැතිරුණු විශ්වාසනීය සේවය.",
    about_kpi1_label: "සේවා කාලය (වසර)",
    about_kpi1_caption: "මුහුදුබඩ පළාත්වල කාර්යාල පහකින් 1798 දී ආරම්භ විය.",
    about_kpi2_label: "තැපැල් කාර්යාල",
    about_kpi2_caption: "දිවයින පුරා. මූලාශ්‍රය: 2024 ප්‍රගති වාර්තාව.",
    about_kpi3_label: "සේවක මණ්ඩලය",
    about_kpi3_caption: "දිවයින පුරා විසිරුණු කැපවූ කාර්ය මණ්ඩලයක්.",
    about_kpi4_prefix: "ආසන්න වශයෙන්",
    about_kpi4_suffix: "මිලියන",
    about_kpi4_label: "සේවය ලබන ජනතාව",
    about_kpi4_caption: "ශ්‍රී ලංකාව පුරා.",
    about_net_title: "අපගේ තැපැල් ජාලය",
    about_net_caption: "2004 දී සෑම පුද්ගලයින් 2,400 කටම එක් තැපැල් කාර්යාලයක් සහ සෑම කිලෝමීටර් 14 කටම කාර්යාලයක් පිහිටා තිබුණි.",
    about_net_main: "ප්‍රධාන තැපැල් කාර්යාල",
    about_net_sub: "උප තැපැල් කාර්යාල",
    about_net_agency: "නියෝජිත තැපැල් කාර්යාල",
    about_net_badge: "මුළු කාර්යාල 4,138",

    // About Page - Major Functions
    /* NEEDS NATIVE REVIEW */
    about_fn_heading: "ප්‍රධාන කාර්යයන්",
    about_fn_intro: "ශ්‍රී ලංකා තැපෑල සිය මෙහෙවර ඉටු කරන ආකාරය.",
    about_tab1_title: "විශිෂ්ට සේවාව",
    about_tab2_title: "තාක්ෂණය සහ නවීකරණය",
    about_tab3_title: "මානව සම්පත සහ සංස්කෘතිය",
    about_tab4_title: "වර්ධනය සහ ව්‍යාප්තිය",
    about_tab5_title: "පාලනය සහ ප්‍රමිතීන්",
    about_items_suffix: "අයිතම",

    // Group 1
    about_fn_1_1: "නායකත්වයේ මඟපෙන්වීම සහ ආදායම් වර්ධනය යටතේ ඕනෑම පාරිසරික හා සමාජීය තත්ත්වයක් තුළ සියලු පාර්ශවකරුවන් සමඟ එක්ව කාර්යක්ෂම හා විශ්වාසනීය සේවාවක් සැපයීම.",
    about_fn_1_2: "ගෙයින් ගෙට සේවය ලබා දීමෙන් පාරිභෝගික විශ්වාසය දිනාගත් තැපැල් සේවය, නවීන අලෙවිකරණ උපාය මාර්ග භාවිතයෙන් වඩාත් ගුණාත්මක හා කාර්යක්ෂම සේවාවක් බවට පත් කිරීම.",
    about_fn_1_3: "ප්‍රසන්න සහ ආකර්ශනීය කාර්යාල පරිසරයක් තුළ සේවාවන් පිරිනැමීමෙන් පාරිභෝගික තෘප්තිය උපරිම කිරීම.",
    about_fn_1_4: "සාමයේ උදාවත් සමඟ සන්නිවේදන හා සමාජ සුභසාධන කටයුතුවලදී දක්ෂ ශ්‍රම බලකාය ඵලදායී ලෙස යොදවමින් තැපැල් සේවාවන් ප්‍රවර්ධනය කිරීම.",

    // Group 2
    about_fn_2_1: "අදාළ පාර්ශවකරුවන්ගේ සහයෝගීතාවයෙන් තැපැල් සේවයේ අභිවෘද්ධිය උදෙසා නව තාක්ෂණික වෙළෙඳපොළ ඉලක්ක කරගත් උපායමාර්ගික සැලැස්මක් සකස් කර ක්‍රියාත්මක කිරීම.",
    about_fn_2_2: "දේශීය හා විදේශීය ආධාර ඇතිව තාක්ෂණය උපරිමයෙන් ප්‍රයෝජනයට ගනිමින් ආයතනික සංවර්ධනය අත්පත් කර ගැනීම.",
    about_fn_2_3: "වේගයෙන් සංවර්ධනය වන යටිතල පහසුකම් උපයෝගී කරගනිමින් සපයනු ලබන සේවාවන්හි ගුණාත්මකභාවය සහ ඵලදායිතාව ඉහළ නැංවීම.",
    about_fn_2_4: "සැමට එකඟ විය හැකි ශක්‍ය හා විනිවිදභාවයෙන් යුත් තාක්ෂණික විගණන හා විමර්ශන පද්ධතියක් හඳුන්වා දීම.",

    // Group 3
    about_fn_3_1: "රාජ්‍ය අංශයේ ප්‍රමුඛතම සන්නිවේදන ආයතනයක් ලෙස ශ්‍රී ලංකා තැපෑලේ අභ්‍යන්තර වටිනාකම් පද්ධතීන් යාවත්කාලීන කරමින් ගෞරවනීය සේවාවක් සැපයීම උදෙසා ආකල්පමය වෙනසක් ඇති කිරීම.",
    about_fn_3_2: "මහජන විශ්වාසය තහවුරු වන පරිදි අඛණ්ඩ පුහුණුව හා ක්‍රමවත් කාර්ය සාධන ඇගයීම් ක්‍රමවේදයක් මඟින් සවිබල ගැන්වූ විනයගරුක කාර්ය මණ්ඩලයක් යෙදවීම.",
    about_fn_3_3: "ගුණාත්මක හා කාර්යක්ෂම පාරිභෝගික සේවාවක් සඳහා ක්‍රමවත් උසස්වීම් පටිපාටියක් හා ස්ථාන මාරු ක්‍රමයක් ක්‍රියාත්මක කරමින් කාර්ය මණ්ඩලය දිරිමත් කිරීම.",
    about_fn_3_4: "ආයතනයේ අභිවෘද්ධිය සහ කාර්මික සාමය ඇති කිරීම සඳහා වෘත්තීය සමිතිවල නිර්මාණශීලී දායකත්වය ඵලදායී ලෙස ලබා ගැනීම.",

    // Group 4
    about_fn_4_1: "නිසි වැඩ අධ්‍යයනයක්, ආදායම් පාදක ශ්‍රේණිගත කිරීම් සහ සේවක අභිප්‍රේරණය තුළින් වඩාත් කාර්යක්ෂම සේවාවක් ලබා දෙමින් දකුණු ආසියාවේ හොඳම තැපැල් කේන්ද්‍රස්ථානය බවට පත්වීම.",
    about_fn_4_2: "සංචාරකයින් ආකර්ෂණය කරගත හැකි සහ මහජන විශ්වාසය දිනාගත හැකි බහුවිධ සේවා සපයන වාණිජ මධ්‍යස්ථානයක් බවට තැපැල් කාර්යාල ජාලය පත් කිරීම.",
    about_fn_4_3: "වේගයෙන් වර්ධනය වන වෙළඳ දැන්වීම් වෙළඳපොලේ වාසි නව්‍ය ලෙස උකහා ගනිමින් සහායක සේවාවන් කාර්යක්ෂමව යොදවා ගැනීම සහ අදාළ පාර්ශ්ව සමඟ කාලෝචිත තීරණ ගැනීම.",
    about_fn_4_4: "විදේශයන්හි වෙසෙන ශ්‍රී ලාංකිකයන්ගේ අවශ්‍යතා සපුරාලීම සඳහා තැපැල් සේවාව පුළුල් කිරීම.",
    about_fn_4_5: "මෙරට සහ විදේශයන්හි මුද්දර එකතු කිරීමේ විනෝදාංශය ප්‍රචලිත කිරීම මඟින් ශ්‍රී ලාංකේය අනන්‍යතාව ජාත්‍යන්තර තලයට ගෙන යාම.",

    // Group 5
    about_fn_5_1: "විශ්ව තැපැල් සංගමයේ සාමාජිකත්වය දරන, මහජන විශ්වාසය දිනූ, දිවයින පුරා විහිදුනු ජාලයකින් සමන්විත ශ්‍රී ලංකා තැපෑල තාක්ෂණික තරගකාරී වෙළෙඳපොළ ජය ගැනීම.",
    about_fn_5_2: "ලිපි බෙදාහැරීමේ ඒකාධිකාරය තහවුරු කරන සහ තැපැල් භාණ්ඩ කාර්යක්ෂමව භාරගැනීම, ප්‍රවාහනය හා බෙදාහැරීම සඳහා තරඟකාරී වාසියක් ලබා දෙන නීති සම්පාදනය කිරීම.",
    about_fn_5_3: "ආයතනික ව්‍යුහය ප්‍රතිසංවිධානය කිරීමෙන් සහ අදාළ නීති සම්පාදනය කිරීමෙන් තරගකාරී වාසියක් ලබා ගැනීම.",

    // About Page - Closing Band
    about_cta_heading: "අපගේ සේවාවන් ගවේෂණය කරන්න",
    about_cta_services: "අපගේ සේවාවන්",
    about_cta_contact: "අප අමතන්න",

    // Information Page - Banner & Nav
    info_banner_title: "තොරතුරු සහ මහජන සම්පත්",
    info_banner_sub: "නිල තැපැල් ගාස්තු, තැපැල් කේත නාමාවලිය, පරිපාලන අයදුම්පත්, ආරක්ෂිත මාර්ගෝපදේශ සහ තොරතුරු දැනගැනීමේ අයිතිවාසිකම් (RTI) වාර්තා ලබා ගන්න.",
    info_search_placeholder: "තැපැල් කේත, අයදුම්පත්, ගාස්තු හෝ රෙගුලාසි සොයන්න...",
    info_pill_codes: "තැපැල් කේත",
    info_pill_rates: "තැපැල් ගාස්තු",
    info_pill_forms: "අයදුම්පත් බාගත කිරීම්",
    info_pill_prohibited: "තහනම් ද්‍රව්‍ය",
    info_pill_rti: "තොරතුරු දැනගැනීමේ අයිතිය",
    info_pill_standards: "බෙදාහැරීමේ ප්‍රමිතීන්",

    // Information Page - Quick Reference Hub
    info_hub_heading: "තැපැල් සම්පත් කේන්ද්‍රස්ථානය",
    info_hub_intro: "නිල මාර්ගෝපදේශ, මෙවලම් සහ බාගත කළ හැකි ප්‍රකාශන ගවේෂණය කිරීමට දෙපාර්තමේන්තු සම්පතක් තෝරන්න.",
    info_card_codes_title: "තැපැල් කේත නාමාවලිය",
    info_card_codes_desc: "පළාත් 9 සහ දිස්ත්‍රික්ක 25 පුරා පිහිටි ඉලක්කම් 5 කින් යුත් තැපැල් කේත සොයන්න.",
    info_card_codes_btn: "තැපැල් කේතය සොයන්න",
    info_card_rates_title: "තැපැල් ගාස්තු සහ මිල සටහන්",
    info_card_rates_desc: "දේශීය ලිපි, විදේශ ගුවන් තැපැල් සහ EMS කුරියර් අයිතම සඳහා වන නිල මිල ලේඛන.",
    info_card_rates_btn: "ගාස්තු සටහන් බලන්න",
    info_card_forms_title: "බාගත හැකි අයදුම්පත්",
    info_card_forms_desc: "පුද්ගලික තැපැල් පෙට්ටි, තැපැල් හැඳුනුම්පත් සහ ජාත්‍යන්තර රේගු සඳහා වන නිල අයදුම්පත්.",
    info_card_forms_btn: "අයදුම්පත් පිරික්සන්න",
    info_card_prohibited_title: "තහනම් සහ සීමා කළ ද්‍රව්‍ය",
    info_card_prohibited_desc: "අත්‍යවශ්‍ය තැපැල් ආරක්ෂණ මාර්ගෝපදේශ, උපද්‍රවකාරී භාණ්ඩ වර්ගීකරණය සහ ඇසුරුම් ප්‍රමිතීන්.",
    info_card_prohibited_btn: "ආරක්ෂිත මාර්ගෝපදේශ",
    info_card_rti_title: "තොරතුරු දැනගැනීමේ අයිතිය (RTI)",
    info_card_rti_desc: "2016 අංක 12 දරන පනත යටතේ විනිවිදභාවය, නම් කළ නිලධාරීන් සහ RTI 01 අයදුම්පත් ක්‍රමවේදය.",
    info_card_rti_btn: "RTI තොරතුරු",
    info_card_charter_title: "පුරවැසි බෙදාහැරීමේ ප්‍රඥප්තිය",
    info_card_charter_desc: "දිවයින පුරා බෙදාහැරීමේ කාල සීමාවන් සහ 1950 ක්ෂණික ඇමතුම් අංකය මගින් පැමිණිලි ඉදිරිපත් කිරීමේ ක්‍රියාවලිය.",
    info_card_charter_btn: "ප්‍රමිතීන් බලන්න",

    // Information Page - Postal Codes Section
    info_codes_heading: "තැපැල් කේත නාමාවලිය (පෝස්ට්කෝඩ්)",
    info_codes_intro: "ලිපි ස්වයංක්‍රීයව වර්ගීකරණය සහ වැරදි ගමනාන්ත වෙත යොමුවීම වැළැක්වීම සඳහා ඉලක්කම් 5 ක කේත ක්‍රමයක් ක්‍රියාත්මක කෙරේ.",
    info_codes_search_label: "නගරය, ප්‍රදේශය, දිස්ත්‍රික්කය හෝ කේතය අනුව සොයන්න:",
    info_codes_th_code: "තැපැල් කේතය",
    info_codes_th_office: "තැපැල් කාර්යාලය / ශාඛාව",
    info_codes_th_district: "දිස්ත්‍රික්කය",
    info_codes_th_province: "පළාත",
    info_codes_copy_btn: "පිටපත් කරන්න",
    info_codes_copied: "පිටපත් විය!",

    // Information Page - Rates & Tariffs Section
    info_rates_heading: "තැපැල් ගාස්තු සහ මිල ලේඛන",
    info_rates_intro: "විශේෂ ගැසට් පත්‍ර නිවේදන යටතේ සංශෝධිත නිල ගාස්තු. සියලුම පරිගණකගත කවුන්ටර සඳහා වලංගු වේ.",
    info_tab_inland: "දේශීය තැපෑල",
    info_tab_international: "ජාත්‍යන්තර ගුවන් තැපෑල",
    info_tab_ems: "EMS ස්පීඩ් පෝස්ට්",
    info_tab_financial: "මූල්‍ය සහ ඒජන්සි ගාස්තු",

    // Information Page - Forms Section
    info_forms_heading: "නිල බාගත හැකි අයදුම්පත්",
    info_forms_intro: "PDF ආකෘතියෙන් නිල දෙපාර්තමේන්තු අයදුම්පත් බාගත කර ඕනෑම තැපැල් කාර්යාල කවුන්ටරයකට භාර දෙන්න.",
    info_form_btn_download: "PDF බාගත කරන්න",

    // Information Page - Prohibited Articles Section
    info_prohibited_heading: "තහනම් සහ සීමා කළ ද්‍රව්‍ය",
    info_prohibited_intro: "විශ්ව තැපැල් සංගමය සහ ශ්‍රී ලංකා රේගු රෙගුලාසිවලට අනුකූලව උපද්‍රවකාරී සහ සීමා කළ අයිතම නීත්‍යානුකූලව පාලනය කෙරේ.",
    info_strictly_prohibited_title: "සපුරා තහනම් ද්‍රව්‍ය",
    info_restricted_title: "කොන්දේසි සහිතව සීමා කළ ද්‍රව්‍ය",
    info_packaging_rules_title: "ඇසුරුම්කරණය සහ ප්‍රමාණ ප්‍රමිතීන්",

    // Information Page - RTI Section
    info_rti_heading: "තොරතුරු දැනගැනීමේ අයිතිවාසිකම (2016 අංක 12 දරන පනත)",
    info_rti_intro: "තැපැල් දෙපාර්තමේන්තුව RTI පනත යටතේ ක්‍රියාකාරී විනිවිදභාවය සහ පුරවැසි සවිබල ගැන්වීම සුරක්ෂිත කරයි.",
    info_rti_designated_title: "නම් කළ නිලධාරී",
    info_rti_officers_title: "තොරතුරු නිලධාරීන්",
    info_rti_process_title: "තොරතුරු ඉල්ලුම් කිරීමේ පියවර",
    info_rti_download_btn: "RTI 01 ආකෘති පත්‍රය බාගත කරන්න",

    // Information Page - Delivery Standards Section
    info_charter_heading: "පුරවැසි බෙදාහැරීමේ ප්‍රඥප්තිය",
    info_charter_intro: "දිවයින පුරා සේවා ජාලය සඳහා බෙදාහැරීමේ ඉලක්ක සහ පාරිභෝගික සේවා කැපවීම්.",

    // Contact Page Content
    contact_banner_title: "ශ්‍රී ලංකා තැපෑල අමතන්න",
    contact_banner_sub: "ඔබට සහාය වීමට අපි සූදානම්. අපගේ ප්‍රධාන කාර්යාලය, පළාත් අධ්‍යක්ෂ කාර්යාල, 1950 ක්ෂණික ඇමතුම් අංකය හෝ නිල මාර්ගගත විමසුම් පද්ධතිය අමතන්න.",
    contact_pill_hq: "ප්‍රධාන කාර්යාලය",
    contact_pill_officials: "ප්‍රධාන නිලධාරීන්",
    contact_pill_provincial: "පළාත් කාර්යාල",
    contact_pill_form: "විමසුම් යොමු කරන්න",
    contact_pill_faq: "ක්ෂණික අංක",

    contact_card_hq_title: "තැපැල් මූලස්ථානය",
    contact_card_hq_addr: "නො. 310, ඩී.ආර්. විජේවර්ධන මාවත, කොළඹ 10, 00100, ශ්‍රී ලංකාව",
    contact_card_hotline_title: "පාරිභෝගික සේවා ක්ෂණික ඇමතුම් 1950",
    contact_card_hotline_desc: "ශ්‍රී ලංකාවේ සියලුම දුරකථන ජාල ඔස්සේ නොමිලේ ඇමතිය හැක. තැපැල් විමසීම්, EMS ලුහුබැඳීම් සහ පාරිභෝගික සහාය.",
    contact_card_hours_title: "සේවා වේලාවන් සහ කවුන්ටර",
    contact_card_hours_desc: "පරිපාලන කාර්යාල: සඳුදා – සිකුරාදා පෙ.ව. 8:30 – ප.ව. 4:30. කොළඹ ප්‍රධාන තැපැල් කාර්යාලයේ පැය 24 පුරා ක්‍රියාත්මක කවුන්ටරය විවෘතයි.",
    contact_card_wa_title: "නිල වට්ස්ඇප් සේවාව",
    contact_card_wa_desc: "ක්ෂණික ලුහුබැඳීම් සහ තැපැල් ගාස්තු විස්තර ලබා ගැනීමට අපගේ ඩිජිටල් පාරිභෝගික සහායක කණ්ඩායම අමතන්න.",

    contact_executives_title: "දෙපාර්තමේන්තු අධ්‍යක්ෂ මණ්ඩලය සහ නිලධාරීන්",
    contact_executives_sub: "කොළඹ තැපැල් මූලස්ථානයේ ප්‍රධාන අංශ ප්‍රධානීන් සඳහා සෘජු පරිපාලන දුරකථන අංක.",
    contact_provincial_title: "පළාත් තැපැල් අධ්‍යක්ෂ කාර්යාල",
    contact_provincial_sub: "දිවයිනේ පළාත් 9 පුරා තැපැල් මෙහෙයුම් සහ උප තැපැල් කාර්යාල අධීක්ෂණය කරන ප්‍රාදේශීය මූලස්ථාන.",

    contact_form_title: "පුරවැසි මාර්ගගත විමසුම් සහ පැමිණිලි කවුළුව",
    contact_form_sub: "ඔබගේ විමසුම, ප්‍රතිපෝෂණය හෝ සේවා පැමිණිල්ල සෘජුවම අප වෙත යොමු කරන්න. ඔබට නිල ලුහුබැඳීමේ අංකයක් නිකුත් කෙරේ.",
    contact_form_name: "සම්පූර්ණ නම",
    contact_form_email: "විද්‍යුත් තැපැල් ලිපිනය",
    contact_form_phone: "දුරකථන / ජංගම අංකය",
    contact_form_category: "විමසුම් කාණ්ඩය",
    contact_form_cat_general: "සාමාන්‍ය විමසුම්",
    contact_form_cat_tracking: "පාර්සල් සහ ලිපි ලුහුබැඳීම",
    contact_form_cat_ems: "EMS ස්පීඩ් පෝස්ට් කුරියර්",
    contact_form_cat_financial: "මුදල් ඇණවුම් සහ බිල්පත් ගෙවීම්",
    contact_form_cat_philatelic: "මුද්දර කාර්යාංශය සහ මුද්දර",
    contact_form_cat_complaint: "මහජන පැමිණිලි / ගැටළු",
    contact_form_subject: "විෂයය",
    contact_form_message: "ඔබගේ පණිවිඩය / විස්තරය",
    contact_form_submit: "නිල විමසුම යොමු කරන්න",
    contact_form_note: "දෙපාර්තමේන්තු පුරවැසි ප්‍රඥප්තිය යටතේ වැඩ කරන දින 2-3 ක් ඇතුළත නිල පිළිතුරක් සැපයේ.",

    // Notices Page Content
    notices_banner_title: "නිවේදන, ප්‍රසම්පාදන සහ පුරප්පාඩු",
    notices_banner_sub: "තැපැල් දෙපාර්තමේන්තුවේ නිල ප්‍රකාශන: මහජන ආරක්ෂක අනතුරු ඇඟවීම්, ජාතික ප්‍රසම්පාදන ලංසු, සැපයුම්කරු ලියාපදිංචි කිරීම් සහ රැකියා පුරප්පාඩු.",
    notices_filter_all: "සියලුම නිවේදන",
    notices_filter_public: "මහජන අනතුරු ඇඟවීම්",
    notices_filter_procurement: "ප්‍රසම්පාදන සහ ලංසු",
    notices_filter_vacancies: "පුරප්පාඩු සහ බඳවා ගැනීම්",
    notices_filter_reports: "කාර්යසාධන වාර්තා",
    notices_search_placeholder: "මූල පද, මාතෘකාව හෝ යොමු අංකය අනුව සොයන්න...",
    notices_btn_download: "ගැසට් පත්‍රය / PDF බාගත කරන්න",
    notices_btn_details: "විස්තර බලන්න",
    notices_badge_urgent: "හදිසි අනතුරු ඇඟවීම",
    notices_badge_tender: "සක්‍රීය ලංසුව",
    notices_badge_career: "බඳවා ගැනීම",
    notices_badge_report: "විගණන වාර්තාව"
  },

  ta: {
    // Accessibility & Page Meta
    skip_to_content: "முக்கிய உள்ளடக்கத்திற்குச் செல்க",
    page_title_home: "இலங்கை தபால் | அதிகாரப்பூர்வ தபால் திணைக்கள போர்டல்",
    page_title_services: "தபால் மற்றும் நிதி சேவைகள் | இலங்கை தபால்",
    page_title_about: "எங்களை பற்றி | இலங்கை தபால் - தபால் திணைக்களம்",
    page_title_info: "தகவல் மற்றும் வளங்கள் | இலங்கை தபால்",
    page_title_contact: "எங்களை தொடர்பு கொள்க | இலங்கை தபால் - தபால் திணைக்களம்",
    page_title_notices: "அறிவித்தல்கள், கொள்முதல் மற்றும் வெற்றிடங்கள் | இலங்கை தபால்",
    page_title_coming: "உருவாக்கத்தில் உள்ளது | இலங்கை தபால்",

    // Navigation
    nav_home: "முகப்பு",
    nav_about: "எங்களை பற்றி",
    nav_about_vision: "தொலைநோக்கும் நோக்கமும்",
    nav_about_insights: "எங்கள் நுண்ணறிவுகள்",
    nav_about_functions: "முக்கிய பணிகள்",
    nav_about_history: "எங்கள் வரலாறு",
    nav_about_team: "எங்கள் குழு",
    nav_services: "சேவைகள்",
    nav_info: "தகவல்கள்",
    nav_media: "ஊடக தொகுப்பு",
    nav_notices: "அறிவிப்புகள்",
    nav_notices_public: "பொது அறிவிப்புகள்",
    nav_notices_procurement: "கொள்முதல்",
    nav_notices_vacancies: "வெற்றிடங்கள்",
    nav_notices_reports: "அறிக்கைகள்",
    nav_contact: "தொடர்பு கொள்ள",
    nav_alerts_label: "அறிவிப்புகள்",
    nav_pause_alert: "அறிவிப்புகளை இடைநிறுத்துக",
    nav_play_alert: "அறிவிப்புகளை இயக்குக",

    // Home Hero Slides
    hero1_title: "இலங்கை தபால் திணைக்களம்",
    hero1_desc: "1798 முதல் அசைக்க முடியாத நம்பிக்கையுடனும் நாடளாவிய தொடர்பாடலுடனும் தேசத்திற்கு சேவை செய்கிறது.",
    hero1_btn_services: "எங்கள் சேவைகள்",
    hero1_btn_track: "உருப்படியைக் கண்காணிக்கவும்",

    hero2_title: "உங்கள் வீட்டு வாசலில் விநியோகம்",
    hero2_desc: "கடிதங்களும் பொதிகளும் மிகுந்த கவனத்துடனும் வேகத்துடனும் நாடெங்கிலும் விநியோகிக்கப்படுகின்றன.",
    hero2_btn_domestic: "உள்நாட்டு தபால்",

    hero3_title: "ஒவ்வொரு கிராமத்தையும் சென்றடைகிறோம்",
    hero3_desc: "9 மாகாணங்களிலும் உள்ள ஒவ்வொரு சமூகத்திற்கும் அணுகக்கூடிய கணினிமயமாக்கப்பட்ட தபால் நிலையங்கள்.",
    hero3_btn_find: "தபால் நிலையத்தைக் கண்டறியவும்",

    // Services Hero Slides
    shero1_title: "பொருளைப் பெற்றவுடன் பணம் செலுத்துதல் (COD)",
    shero1_desc: "வீட்டு வாசலில் பண வசூலுடன் கூடிய வேகமான, பாதுகாப்பான மின்வணிக பொதி சேவை.",
    shero2_title: "உள்நாட்டு தபால்",
    shero2_desc: "தீவு முழுவதும் சாதாரண மற்றும் பதிவு செய்யப்பட்ட கடித விநியோகத்தை வழங்கும் நம்பகமான சேவை.",
    shero3_title: "சர்வதேச தபால்",
    shero3_desc: "இலங்கையை உலகெங்கிலும் உள்ள 190 க்கும் மேற்பட்ட நாடுகளுடன் இணைக்கும் நம்பகமான சர்வதேச தபால் சேவை.",
    shero4_title: "பணப் பரிமாற்றம்",
    shero4_desc: "அனைத்து தபால் நிலையங்களிலும் பெறக்கூடிய வேகமான, பாதுகாப்பான இலத்திரனியல் பணக்கட்டளை சேவை.",
    shero_btn_learn: "மேலும் அறிய",

    // Section Titles
    section_core_services: "எங்கள் முதன்மை சேவைகள்",
    section_core_services_sub: "இலங்கை முழுவதிலும் உள்ள குடிமக்கள் மற்றும் வணிகங்களுக்கான நம்பகமான தபால் மற்றும் நிதிச் சேவைகள்.",
    group_send_receive: "அனுப்புதல் மற்றும் பெறுதல்",
    group_pay: "கட்டணங்கள்",
    group_money_protect: "பணம் மற்றும் பாதுகாப்பு",
    group_messages_products: "செய்திகள் மற்றும் தயாரிப்புகள்",

    // 15 Core Services
    srv1_title: "சாதாரண தபால் (உள்நாட்டு தபால்)",
    srv1_desc: "தீவு முழுவதும் உள்ள ஒவ்வொரு தெரு மற்றும் கிராமத்தையும் சென்றடையும் மலிவான கடித விநியோகம்.",
    srv2_title: "சர்வதேச தபால்",
    srv2_desc: "விமானம் மற்றும் கப்பல் வழியாக உலகெங்கிலும் உள்ள நாடுகளுக்கு தபால் உருப்படிகளை அனுப்புதல்.",
    srv3_title: "பணப் பரிமாற்றம்",
    srv3_desc: "எந்தவொரு தபால் நிலையத்திலும் எளிதாக மாற்றக்கூடிய நம்பகமான பணக்கட்டளை வசதி.",
    srv4_title: "EMS விரைவு தபால்",
    srv4_desc: "இணைய வழியில் கண்காணிக்கக்கூடிய அதிவேக முதன்மை கூரியர் சேவை.",
    srv5_title: "பொருள் பெறும்போது பணம் (COD)",
    srv5_desc: "மின்வணிக விற்பனையாளர்களுக்கு வீட்டு வாசலில் பணம் வசூலிக்கும் எளிய சேவை.",
    srv6_title: "எஸ்எல் போஸ்ட் கூரியர்",
    srv6_desc: "கார்ப்பரேட் மற்றும் தனிப்பட்ட பொதிகளை விரைவாக கொண்டு சேர்க்கும் சிறப்பு கூரியர் வலைப்பின்னல்.",
    srv7_title: "கட்டணங்கள் செலுத்துதல்",
    srv7_desc: "மின்சாரம், நீர், தொலைபேசி மற்றும் அரசு கட்டணங்களை ஒரே இடத்தில் செலுத்தும் வசதி.",
    srv8_title: "ETF / EPF கொடுப்பனவுகள்",
    srv8_desc: "சட்டபூர்வ ஓய்வூதியம் மற்றும் சேமலாப நிதி பங்களிப்புகளை ஏற்றுக்கொள்வதற்கான அங்கீகரிக்கப்பட்ட சேவை.",
    srv9_title: "தேர்வு கட்டணங்கள்",
    srv9_desc: "பரீட்சைகள் திணைக்களத்தின் அனைத்து பரீட்சை கட்டணங்களையும் எளிதாக செலுத்தும் வசதி.",
    srv10_title: "சமூக நலச் சேவைகள்",
    srv10_desc: "முதியோர் கொடுப்பனவுகள் மற்றும் அரசு சமூக நல உதவிகளை துல்லியமாக விநியோகித்தல்.",
    srv11_title: "வங்கி சேவைகள்",
    srv11_desc: "தேர்ந்தெடுக்கப்பட்ட தபால் நிலையங்களில் தேசிய சேமிப்பு வங்கி (NSB) பணப் பரிவர்த்தனை வசதிகள்.",
    srv12_title: "இ-டெலிமெயில் (e-Telemail)",
    srv12_desc: "மின்னணு செய்திகளை அச்சிடப்பட்ட கடிதங்களாக மாற்றி துரிதமாக முகவரிக்கு வழங்கும் சேவை.",
    srv13_title: "பிலா பிலா தொலைத்தொடர்பு பொருட்கள்",
    srv13_desc: "தபால் நிலைய விற்பனை மையங்களில் கிடைக்கும் தொலைத்தொடர்பு சாதனங்கள் மற்றும் உபகரணங்கள்.",
    srv14_title: "தபால் காப்புறுதி",
    srv14_desc: "உங்கள் மதிப்புமிக்க பொதிகளுக்கு இழப்பு அல்லது சேதத்திற்கு எதிரான முழுமையான காப்புறுதி.",
    srv15_title: "போக்குவரத்து அபராதங்கள்",
    srv15_desc: "கணினிமயமாக்கப்பட்ட தபால் நிலையங்கள் மூலம் பொலிஸ் போக்குவரத்து அபராதங்களை நேரடியாக செலுத்துதல்.",
    card_cta: "மேலும் அறிய",

    // Footer
    footer_tagline: "ஒவ்வொரு இலங்கையரையும் ஒவ்வொரு நாளும் இணைக்கிறது.",
    footer_address: "இலக்கம் 310, டி.ஆர். விஜேவர்தன மாவத்தை, கொழும்பு 01000, இலங்கை",
    footer_hotline: "அவசர அழைப்பு: 1950",
    footer_email: "info@slpost.lk",
    footer_col_about: "எங்களை பற்றி",
    footer_col_services: "சேவைகள்",
    footer_col_info: "தகவல்கள்",
    footer_col_media: "ஊடக தொகுப்பு",
    footer_col_notices: "அறிவிப்புகள்",
    footer_col_contact: "தொடர்பு கொள்ள",
    footer_postal_rates: "தபால் கட்டணங்கள்",
    footer_postal_codes: "தபால் குறியீடுகள்",
    footer_track: "கண்காணிப்பு",
    footer_faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    footer_forms: "படிவங்கள் பதிவிறக்கம்",
    footer_copyright: "தபால் திணைக்களம், இலங்கை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    footer_social_label: "அதிகாரப்பூர்வ சமூக ஊடகங்கள்:",

    // Chatbot (AI Assistant)
    chat_title: "இலங்கை தபால் உதவியாளர்",
    chat_badge: "AI உதவியாளர்",
    chat_welcome: "வணக்கம்! இலங்கை தபால் உதவியாளருக்கு வரவேற்கிறோம். இன்று உங்களுக்கு நான் எவ்வாறு உதவ முடியும்?",
    chat_q1: "உருப்படியை எவ்வாறு கண்காணிப்பது?",
    chat_q2: "எங்களை எவ்வாறு தொடர்பு கொள்வது?",
    chat_q3: "தபால் நிலையத்தில் என்ன கட்டணங்களை செலுத்தலாம்?",
    chat_q4: "வெளிநாட்டிற்கு பொதியை எவ்வாறு அனுப்புவது?",
    chat_q5: "எனக்கு அருகில் உள்ள தபால் நிலையம் எங்கே?",
    chat_a1: "எங்கள் இணைய கண்காணிப்பு கருவி மூலம் 13 இலக்க குறியீட்டை பயன்படுத்தி விவரங்களை அறியலாம்.",
    chat_a2: "1950 அவசர அழைப்பு எண் அல்லது info@slpost.lk ஊடாக தொடர்பு கொள்ளலாம்.",
    chat_a3: "மின்சாரம், நீர், தொலைபேசி கட்டணங்கள் மற்றும் போக்குவரத்து அபராதங்களை செலுத்தலாம்.",
    chat_a4: "விமானம் அல்லது கப்பல் தபால் மூலம் அனுப்பலாம். CN22/CN23 சுங்க படிவத்தை பூர்த்தி செய்து சமர்ப்பிக்கவும்.",
    chat_a5: "நாடு முழுவதும் 4,000 க்கும் மேற்பட்ட தபால் நிலையங்கள் உள்ளன. விவரங்களுக்கு 1950 ஐ அழைக்கவும்.",
    chat_footer_note: "பல்கலைக்கழக பணிக்கான மாதிரி உதவியாளர்.",

    // Hotline Menu
    hotline_menu_title: "விரைவான தொடர்பு",
    hotline_call_btn: "அழைப்பு 1950",
    hotline_wa_btn: "WhatsApp அறிவிப்புகள்",

    // Coming Soon Page
    coming_soon_badge: "திணைக்கள போர்டல்",
    coming_soon_title: "பக்கம் உருவாக்கத்தில் உள்ளது",
    coming_soon_desc: "இந்த பகுதி பல்கலைக்கழக மறுவடிவமைப்பு திட்டத்தின் ஒரு பகுதியாக உருவாக்கப்பட்டு வருகிறது. தயவுசெய்து எங்கள் சேவைகள் பக்கத்தைப் பார்வையிடவும்.",
    coming_soon_btn: "முகப்பிற்குத் திரும்பு",
    breadcrumb_home: "முகப்பு",
    breadcrumb_services: "சேவைகள்",
    breadcrumb_about: "எங்களை பற்றி",
    breadcrumb_info: "தகவல்",
    breadcrumb_contact: "எங்களை தொடர்பு கொள்க",
    breadcrumb_notices: "அறிவித்தல்கள்",
    breadcrumb_coming: "உருவாக்கத்தில் உள்ளது",

    // About Page - Banner
    about_banner_title: "எங்களை பற்றி",
    about_banner_sub: "1798 முதல் தேசத்திற்கு சேவை செய்கிறது.",
    about_pill_vision: "தொலைநோக்கும் நோக்கமும்",
    about_pill_insights: "எங்கள் நுண்ணறிவுகள்",
    about_pill_functions: "முக்கிய பணிகள்",

    // About Page - Vision & Mission (Official verbatim from slpost.gov.lk)
    about_vision_heading: "தொலைநோக்கு",
    about_vision_text: "ஆக்கபூர்வமானதும் முகத்தன்மையானதுமான சேவைகளை வழங்குவதன் மூலம் சிறந்த தொடர்பாள்ப் பங்காளியாதல்.",
    about_mission_heading: "நோக்கம்",
    about_mission_text: "உலக அஞ்சல் சங்கத்தின் தரத்தினை பின்பற்றியும், இலங்கை அரச கொள்கைகளை நிலைநிறுத்தியும் நுகர்வோரின் உயரிய திருப்திமட்டத்தினை அடையும் பொருட்டு, மனங்கவர்ந்த பணிச்சூழலின் மத்தியில், செயலூக்கம்மிக்க பணிக்குழுவினரின் ஒத்துழைப்பு மற்றும் நவீன தொழில்நுட்பம் என்பவற்றை பயன்படுத்தி முற்றிலும் புதிய வினைத்திறன்மிக்க மற்றும் நம்பகமான அஞ்சல் சேவைகளை வழங்குதல்.",
    about_pill_innovative: "புதுமையான",
    about_pill_efficient: "வினைத்திறன்மிக்க",
    about_pill_reliable: "நம்பகமான",

    // About Page - Insights
    about_insights_heading: "எங்கள் முன்னேற்றம் எண்களில்",
    about_insights_intro: "இரண்டு நூற்றாண்டுகளுக்கு மேலாக அர்ப்பணிப்புடன் கூடிய தேசளாவிய சேவை.",
    about_kpi1_label: "சேவை ஆண்டுகள்",
    about_kpi1_caption: "1798 இல் கரையோர மாகாணங்களில் ஐந்து அலுவலகங்களுடன் தொடங்கப்பட்டது.",
    about_kpi2_label: "அஞ்சல் அலுவலகங்கள்",
    about_kpi2_caption: "தீவு முழுவதும். மூலம்: 2024 முன்னேற்ற அறிக்கை.",
    about_kpi3_label: "பணியாளர்கள்",
    about_kpi3_caption: "தீவு முழுவதிலும் உள்ள அர்ப்பணிப்புள்ள பணியாளர்கள்.",
    about_kpi4_prefix: "கிட்டத்தட்ட",
    about_kpi4_suffix: "மில்லியன்",
    about_kpi4_label: "சேவை பெறும் மக்கள்",
    about_kpi4_caption: "இலங்கை முழுவதும்.",
    about_net_title: "எங்கள் அஞ்சல் வலையமைப்பு",
    about_net_caption: "2004 இல் ஒவ்வொரு 2,400 மக்களுக்கும் ஒரு அஞ்சல் அலுவலகமும், ஒவ்வொரு 14 கி.மீ.க்கும் ஒரு அலுவலகமும் இருந்தது.",
    about_net_main: "முதன்மை அஞ்சல் அலுவலகங்கள்",
    about_net_sub: "உப அஞ்சல் அலுவலகங்கள்",
    about_net_agency: "முகவர் அஞ்சல் அலுவலகங்கள்",
    about_net_badge: "4,138 மொத்த அலுவலகங்கள்",

    // About Page - Major Functions
    /* NEEDS NATIVE REVIEW */
    about_fn_heading: "முக்கிய பணிகள்",
    about_fn_intro: "இலங்கை அஞ்சல் தனது நோக்கத்தை எவ்வாறு நிறைவேற்றுகிறது.",
    about_tab1_title: "சிறந்த சேவை",
    about_tab2_title: "தொழில்நுட்பமும் நவீனமயமாக்கலும்",
    about_tab3_title: "மனிதவளமும் கலாச்சாரமும்",
    about_tab4_title: "வளர்ச்சியும் அடைவும்",
    about_tab5_title: "ஆளுகையும் நிலையும்",
    about_items_suffix: "உருப்படிகள்",

    // Group 1
    about_fn_1_1: "தலைமையின் வழிகாட்டுதலிலும் வருமான அதிகரிப்பிலும் எந்தவொரு சுற்றுச்சூழல் மற்றும் சமூக சூழ்நிலையிலும் அனைத்து பங்குதாரர்களுடனும் இணைந்து ஒரு குழுவாக திறமையான மற்றும் நம்பகமான சேவையை வழங்குதல்.",
    about_fn_1_2: "வீட்டு வாசலில் சேவைகளை வழங்கி நுகர்வோரின் நம்பிக்கையை வென்ற அஞ்சல் சேவையை, நவீன சந்தைப்படுத்தல் உத்திகளைப் பயன்படுத்தி மேலும் தரமான மற்றும் திறமையான சேவையாக மாற்றுதல்.",
    about_fn_1_3: "மகிழ்ச்சியான மற்றும் கவர்ச்சிகரமான அலுவலக சூழலில் சேவைகளை வழங்குவதன் மூலம் நுகர்வோரை மகிழ்வித்தல்.",
    about_fn_1_4: "சமாதானத்தின் விடியலுடன், தகவல் தொடர்பு மற்றும் சமூக நலச் செயற்பாடுகளில் திறமையான பணியாளர்களை திறம்பட ஈடுபடுத்துவதன் மூலம் அஞ்சல் சேவைகளை மேம்படுத்துதல்.",

    // Group 2
    about_fn_2_1: "தொடர்புடைய பங்குதாரர்களின் ஒத்துழைப்புடன் அஞ்சல் சேவையின் நோக்கங்களை மேம்படுத்தும் புதிய தொழில்நுட்ப சந்தையை மையமாகக் கொண்ட மூலோபாய திட்டத்தை வகுத்து செயல்படுத்துதல்.",
    about_fn_2_2: "உள்நாட்டு மற்றும் வெளிநாட்டு உதவிகளுடன் தொழில்நுட்பத்தை உகந்த முறையில் பயன்படுத்தி நிறுவன மேம்பாட்டை அடைதல்.",
    about_fn_2_3: "வேகமாக வளர்ந்து வரும் உள்கட்டமைப்பு வசதிகளைப் பயன்படுத்தி வழங்கப்படும் சேவைகளின் தரம் மற்றும் வினைத்திறனை மேம்படுத்துதல்.",
    about_fn_2_4: "அனைவராலும் ஏற்றுக்கொள்ளக்கூடிய சாத்தியமான மற்றும் வெளிப்படையான தொழில்நுட்ப அடிப்படையிலான தணிக்கை மற்றும் விசாரணை முறையை அறிமுகப்படுத்துதல்.",

    // Group 3
    about_fn_3_1: "அரசுத் துறையின் முதன்மையான தகவல் தொடர்பு நிறுவனமாக இலங்கை அஞ்சலின் உள்ளார்ந்த மதிப்பு அமைப்புகளைப் புதுப்பித்து, கண்ணியமான சேவையை வழங்குவதற்கான மனப்பாங்கு மாற்றத்தை ஏற்படுத்துதல்.",
    about_fn_3_2: "பொதுமக்களின் நம்பிக்கையை நிலைநிறுத்தும் வகையில் தொடர்ச்சியான பயிற்சி மற்றும் முறையான செயல்திறன் மதிப்பீட்டு முறை மூலம் அதிகாரமளிக்கப்பட்ட ஒழுக்கமான பணியாளர்களை ஈடுபடுத்துதல்.",
    about_fn_3_3: "தரமான மற்றும் திறமையான நுகர்வோர் சேவைக்காக முறையான பதவி உயர்வு நடைமுறை மற்றும் இடமாற்ற முறையை செயல்படுத்துவதன் மூலம் பணியாளர்களை ஊக்குவித்தல்.",
    about_fn_3_4: "நிறுவனத்தின் முன்னேற்றத்திற்கும் தொழில்துறை அமைதியை ஏற்படுத்துவதற்கும் தொழிற்சங்கங்களின் ஆக்கபூர்வமான பங்களிப்பை பயனுள்ள வகையில் பயன்படுத்துதல்.",

    // Group 4
    about_fn_4_1: "சரியான வேலை ஆய்வு, வருமான அடிப்படையிலான தரம் பிரித்தல் மற்றும் ஊழியர் ஊக்குவிப்பு மூலம் திறமையான சேவையை வழங்கி தெற்காசியாவின் சிறந்த அஞ்சல் மையமாக மாறுதல்.",
    about_fn_4_2: "சுற்றுலாப் பயணிகளை ஈர்க்கக்கூடிய மற்றும் பொதுமக்களின் நம்பிக்கையை வெல்லக்கூடிய பலநோக்கு சேவைகளை வழங்கும் வணிக மையமாக அஞ்சல் அலுவலக வலையமைப்பை மாற்றுதல்.",
    about_fn_4_3: "வேகமாக வளர்ந்து வரும் விளம்பரச் சந்தையின் நன்மைகளை புதுமையாகப் பயன்படுத்திக்கொண்டு, துணைச் சேவைகளை திறம்படப் பயன்படுத்துவதும், உரிய தரப்பினருடன் சரியான நேரத்தில் உறுதியான முடிவுகளை எடுப்பதும்.",
    about_fn_4_4: "வெளிநாடுகளில் வாழும் இலங்கையர்களின் தேவைகளைப் பூர்த்தி செய்யும் வகையில் அஞ்சல் சேவையை விரிவுபடுத்துதல்.",
    about_fn_4_5: "நாட்டிலும் வெளிநாட்டிலும் முத்திரை சேகரிக்கும் பொழுதுபோக்கை பரப்புவதன் மூலம் இலங்கை அடையாளத்தை சர்வதேச அரங்கிற்கு கொண்டு செல்லுதல்.",

    // Group 5
    about_fn_5_1: "உலக அஞ்சல் சங்கத்தின் உறுப்புரிமையைக் கொண்ட, பொதுமக்களின் நம்பிக்கையை வென்ற, நாடளாவிய வலையமைப்பைக் கொண்ட இலங்கை அஞ்சல், தொழில்நுட்பம் சார்ந்த போட்டி சந்தையை வெற்றி கொள்ளுதல்.",
    about_fn_5_2: "கடிதங்களை விநியோகிப்பதில் ஏகபோக உரிமையை உறுதிசெய்து, அஞ்சல் உருப்படிகளை திறம்பட ஏற்றுக்கொள்வது, போக்குவரத்து மற்றும் விநியோகிப்பதில் போட்டி நன்மையை வழங்கும் சட்டங்களை உருவாக்குதல்.",
    about_fn_5_3: "நிறுவனக் கட்டமைப்பை மறுசீரமைப்பதன் மூலமும் பொருத்தமான சட்டங்களை உருவாக்குவதன் மூலமும் போட்டி நன்மைகளைப் பெறுதல்.",

    // About Page - Closing Band
    about_cta_heading: "நாங்கள் வழங்குவதை ஆராயுங்கள்",
    about_cta_services: "எங்கள் சேவைகள்",
    about_cta_contact: "எங்களை தொடர்பு கொள்க",

    // Information Page - Banner & Nav
    info_banner_title: "தகவல் மற்றும் பொது வளங்கள்",
    info_banner_sub: "அதிகாரப்பூர்வ தபால் கட்டணங்கள், அஞ்சல் குறியீட்டு விபரக்கொத்து, விண்ணப்பப் படிவங்கள், பாதுகாப்பு விதிமுறைகள் மற்றும் தகவல் அறியும் உரிமை (RTI) பதிவுகளை அணுகவும்.",
    info_search_placeholder: "அஞ்சல் குறியீடுகள், படிவங்கள், கட்டணங்கள் அல்லது விதிமுறைகளைத் தேடுங்கள்...",
    info_pill_codes: "அஞ்சல் குறியீடுகள்",
    info_pill_rates: "கட்டணங்கள் & விலைப்பட்டியல்",
    info_pill_forms: "படிவங்களைப் பதிவிறக்குக",
    info_pill_prohibited: "தடைசெய்யப்பட்ட பொருட்கள்",
    info_pill_rti: "தகவல் அறியும் உரிமை",
    info_pill_standards: "விநியோகத் தரநிலைகள்",

    // Information Page - Quick Reference Hub
    info_hub_heading: "தபால் வள மையம்",
    info_hub_intro: "அதிகாரப்பூர்வ வழிகாட்டுதல்கள், கருவிகள் மற்றும் பதிவிறக்கக்கூடிய வெளியீடுகளை ஆராய ஒரு திணைக்கள வளத்தைத் தேர்ந்தெடுக்கவும்.",
    info_card_codes_title: "அஞ்சல் குறியீடுகள் அடைவு",
    info_card_codes_desc: "9 மாகாணங்கள் மற்றும் 25 நிர்வாக மாவட்டங்களின் 5 இலக்க அஞ்சல் குறியீடுகளைத் தேடுங்கள்.",
    info_card_codes_btn: "அஞ்சல் குறியீட்டைக் காண்க",
    info_card_rates_title: "தபால் கட்டணங்கள் & விலைப்பட்டியல்",
    info_card_rates_desc: "உள்நாட்டு கடிதங்கள், சர்வதேச விமான அஞ்சல் மற்றும் ஈஎம்எஸ் விரைவு அஞ்சல் உருப்படிகளுக்கான தற்போதைய அதிகாரப்பூர்வ கட்டணங்கள்.",
    info_card_rates_btn: "கட்டண அட்டவணையைப் பார்க்க",
    info_card_forms_title: "பதிவிறக்கக்கூடிய படிவங்கள்",
    info_card_forms_desc: "தனியார் அஞ்சல் பெட்டிகள், தபால் அடையாள அட்டைகள் மற்றும் சுங்கப் பிரகடனங்களுக்கான அதிகாரப்பூர்வ விண்ணப்பப் படிவங்கள்.",
    info_card_forms_btn: "படிவங்களை உலாவுக",
    info_card_prohibited_title: "தடைசெய்யப்பட்ட & கட்டுப்படுத்தப்பட்ட பொருட்கள்",
    info_card_prohibited_desc: "அத்தியாவசிய அஞ்சல் பாதுகாப்பு வழிகாட்டுதல்கள், ஆபத்தான பொருட்கள் வகைப்பாடு மற்றும் பேக்கேஜிங் வரம்புகள்.",
    info_card_prohibited_btn: "பாதுகாப்பு வழிகாட்டுதல்கள்",
    info_card_rti_title: "தகவல் அறியும் உரிமை (RTI)",
    info_card_rti_desc: "2016 ஆம் ஆண்டின் 12 ஆம் இலக்கச் சட்டத்தின் கீழ் நியமிக்கப்பட்ட அதிகாரிகள் மற்றும் RTI 01 படிவ நடைமுறைகளுடன் கூடிய வெளிப்படைத்தன்மை போர்டல்.",
    info_card_rti_btn: "RTI தகவல்கள்",
    info_card_charter_title: "பிரஜைகள் விநியோக சாசனம்",
    info_card_charter_desc: "நாடளாவிய விநியோக காலக்கெடு, கண்காணிப்பு வாக்குறுதிகள் மற்றும் 1950 உடனடி அழைப்பு எண் மூலமான குறைதீர்ப்பு.",
    info_card_charter_btn: "தரநிலைகளைக் காண்க",

    // Information Page - Postal Codes Section
    info_codes_heading: "அஞ்சல் குறியீடுகள் அடைவு (Postcodes)",
    info_codes_intro: "தானியங்கி வரிசைப்படுத்தலை விரைவுபடுத்தவும் தவறான விநியோகத்தைத் தவிர்க்கவும் இலங்கை தபால் 5 இலக்க அஞ்சல் குறியீட்டு முறையைப் பயன்படுத்துகிறது.",
    info_codes_search_label: "நகரம், மாவட்டம் அல்லது குறியீடு மூலம் வடிகட்டவும்:",
    info_codes_th_code: "அஞ்சல் குறியீடு",
    info_codes_th_office: "தபால் நிலையம் / கிளை",
    info_codes_th_district: "மாவட்டம்",
    info_codes_th_province: "மாகாணம்",
    info_codes_copy_btn: "நகலெடு",
    info_codes_copied: "நகலெடுக்கப்பட்டது!",

    // Information Page - Rates & Tariffs Section
    info_rates_heading: "தபால் கட்டணங்கள் & அட்டவணைகள்",
    info_rates_intro: "வர்த்தமானி அறிவித்தல்களின் கீழ் திருத்தப்பட்ட அதிகாரப்பூர்வ கட்டணங்கள். அனைத்து கணினிமயமாக்கப்பட்ட கவுண்டர்களுக்கும் செல்லுபடியாகும்.",
    info_tab_inland: "உள்நாட்டு அஞ்சல்",
    info_tab_international: "சர்வதேச விமான அஞ்சல்",
    info_tab_ems: "ஈஎம்எஸ் விரைவு அஞ்சல்",
    info_tab_financial: "நிதி & முகவர் கட்டணங்கள்",

    // Information Page - Forms Section
    info_forms_heading: "அதிகாரப்பூர்வ பதிவிறக்கக்கூடிய படிவங்கள்",
    info_forms_intro: "அதிகாரப்பூர்வ திணைக்கள விண்ணப்பங்களை PDF வடிவில் பதிவிறக்கம் செய்து எந்தவொரு தபால் நிலைய கவுண்டரிலும் சமர்ப்பிக்கவும்.",
    info_form_btn_download: "PDF பதிவிறக்குக",

    // Information Page - Prohibited Articles Section
    info_prohibited_heading: "தடைசெய்யப்பட்ட & கட்டுப்படுத்தப்பட்ட பொருட்கள்",
    info_prohibited_intro: "உலகளாவிய அஞ்சல் ஒன்றியம் மற்றும் இலங்கை சுங்க விதிமுறைகளுக்கு இணங்க, அபாயகரமான மற்றும் கட்டுப்படுத்தப்பட்ட பொருட்கள் கண்டிப்பாக கண்காணிக்கப்படுகின்றன.",
    info_strictly_prohibited_title: "முற்றிலும் தடைசெய்யப்பட்ட பொருட்கள்",
    info_restricted_title: "நிபந்தனைக்குட்பட்டு அனுமதிக்கப்பட்ட பொருட்கள்",
    info_packaging_rules_title: "பேக்கிங் & பரிமாண தரநிலைகள்",

    // Information Page - RTI Section
    info_rti_heading: "தகவல் அறியும் உரிமை (2016 ஆம் ஆண்டின் 12 ஆம் இலக்க சட்டம்)",
    info_rti_intro: "தகவல் அறியும் உரிமைச் சட்டத்தின் கீழ் தபால் திணைக்களம் செயலூக்கமான வெளிப்படைத்தன்மை மற்றும் மக்கள் அதிகாரமளித்தலை நிலைநிறுத்துகிறது.",
    info_rti_designated_title: "நியமிக்கப்பட்ட அதிகாரி",
    info_rti_officers_title: "தகவல் அதிகாரிகள்",
    info_rti_process_title: "தகவல் கோரும் நடைமுறை",
    info_rti_download_btn: "RTI 01 படிவத்தைப் பதிவிறக்குக",

    // Information Page - Delivery Standards Section
    info_charter_heading: "பிரஜைகள் விநியோக சாசனம்",
    info_charter_intro: "நாடளாவிய வலையமைப்பிற்கான விநியோக இலக்குகள் மற்றும் வாடிக்கையாளர் சேவை அர்ப்பணிப்புகள்.",

    // Contact Page Content
    contact_banner_title: "இலங்கை தபாலைத் தொடர்பு கொள்ளுங்கள்",
    contact_banner_sub: "உங்களுக்கு உதவ நாங்கள் தயாராக உள்ளோம். எங்கள் தபால் தலைமையகம், மாகாண பணிப்பாளர் அலுவலகங்கள், 1950 உடனடி அழைப்பு எண் அல்லது இணையவழி படிவம் மூலம் தொடர்பு கொள்ளுங்கள்.",
    contact_pill_hq: "தலைமையகம்",
    contact_pill_officials: "முக்கிய அதிகாரிகள்",
    contact_pill_provincial: "மாகாண அலுவலகங்கள்",
    contact_pill_form: "விசாரணை அனுப்ப",
    contact_pill_faq: "நேரடி எண்கள்",

    contact_card_hq_title: "தபால் தலைமையகம்",
    contact_card_hq_addr: "இல. 310, டி.ஆர். விஜேவர்தன மாவத்தை, கொழும்பு 10, 00100, இலங்கை",
    contact_card_hotline_title: "வாடிக்கையாளர் சேவை உடனடி அழைப்பு 1950",
    contact_card_hotline_desc: "இலங்கையின் அனைத்து தொலைபேசி நெட்வொர்க்குகளிலிருந்தும் கட்டணமில்லா அழைப்பு. தபால் விசாரணைகள், ஈஎம்எஸ் கண்காணிப்பு மற்றும் உதவிக்கு அர்ப்பணிக்கப்பட்டது.",
    contact_card_hours_title: "செயல்பாட்டு நேரங்கள் & கவுண்டர்கள்",
    contact_card_hours_desc: "நிர்வாக அலுவலகங்கள்: திங்கள் – வெள்ளி மு.ப 8:30 – பி.ப 4:30. கொழும்பு பிரதான தபால் அலுவலகத்தின் 24/7 கவுண்டர் திறந்துள்ளது.",
    contact_card_wa_title: "அதிகாரப்பூர்வ வாட்ஸ்அப் உதவி",
    contact_card_wa_desc: "விரைவான கண்காணிப்பு மற்றும் தபால் கட்டண விபரங்களுக்கு எங்களின் வாடிக்கையாளர் ஆதரவு குழுவை தொடர்பு கொள்ளவும்.",

    contact_executives_title: "திணைக்கள பணிப்பாளர் சபை மற்றும் அதிகாரிகள்",
    contact_executives_sub: "கொழும்பு தபால் தலைமையகத்தின் முக்கிய நிர்வாகப் பிரிவு தலைவர்களுக்கான நேரடி தொடர்பு எண்கள்.",
    contact_provincial_title: "மாகாண தபால் பணிப்பாளர் அலுவலகங்கள்",
    contact_provincial_sub: "9 மாகாணங்களிலும் உள்ள தபால் நிலையங்கள் மற்றும் விநியோகங்களை மேற்பார்வையிடும் பிராந்திய தலைமையகங்கள்.",

    contact_form_title: "பிரஜைகள் இணையவழி விசாரணை & குறைதீர்ப்பு மையம்",
    contact_form_sub: "உங்கள் விசாரணை, கருத்து அல்லது சேவை புகாரை நேரடியாக சமர்ப்பிக்கவும். உங்களுக்கு அதிகாரப்பூர்வ கண்காணிப்பு இலக்கம் வழங்கப்படும்.",
    contact_form_name: "முழுப் பெயர்",
    contact_form_email: "மின்னஞ்சல் முகவரி",
    contact_form_phone: "தொலைபேசி / மொபைல் எண்",
    contact_form_category: "விசாரணை வகை",
    contact_form_cat_general: "பொதுவான விசாரணை",
    contact_form_cat_tracking: "பொதி & அஞ்சல் கண்காணிப்பு",
    contact_form_cat_ems: "ஈஎம்எஸ் விரைவு அஞ்சல் கூரியர்",
    contact_form_cat_financial: "பண அஞ்சல் & கட்டண சேவைகள்",
    contact_form_cat_philatelic: "முத்திரை பணியகம் & முத்திரைகள்",
    contact_form_cat_complaint: "பொதுமக்கள் புகார் / குறை",
    contact_form_subject: "பொருள்",
    contact_form_message: "உங்கள் செய்தி / விபரங்கள்",
    contact_form_submit: "அதிகாரப்பூர்வ விசாரணையைச் சமர்ப்பிக்க",
    contact_form_note: "திணைக்கள பிரஜைகள் சாசனத்தின் கீழ் 2-3 வேலை நாட்களுக்குள் பதில் வழங்கப்படும்.",

    // Notices Page Content
    notices_banner_title: "அறிவித்தல்கள், கொள்முதல் மற்றும் வெற்றிடங்கள்",
    notices_banner_sub: "தபால் திணைக்களத்தின் அதிகாரப்பூர்வ வெளியீடுகள்: பொது பாதுகாப்பு எச்சரிக்கைகள், தேசிய கொள்முதல் டெண்டர்கள், சப்ளையர் பதிவுகள் மற்றும் வேலை வெற்றிடங்கள்.",
    notices_filter_all: "அனைத்து அறிவித்தல்களும்",
    notices_filter_public: "பொது எச்சரிக்கைகள்",
    notices_filter_procurement: "கொள்முதல் & டெண்டர்கள்",
    notices_filter_vacancies: "வெற்றிடங்கள் & ஆட்சேர்ப்பு",
    notices_filter_reports: "செயல்திறன் அறிக்கைகள்",
    notices_search_placeholder: "முக்கிய சொல், தலைப்பு அல்லது குறிப்பு எண் மூலம் தேடுங்கள்...",
    notices_btn_download: "வர்த்தமானி / PDF பதிவிறக்குக",
    notices_btn_details: "விவரங்களைப் பார்க்க",
    notices_badge_urgent: "அவசர எச்சரிக்கை",
    notices_badge_tender: "செயலில் உள்ள டெண்டர்",
    notices_badge_career: "ஆட்சேர்ப்பு",
    notices_badge_report: "தணிக்கை அறிக்கை"
  }
};

/* ==========================================================================
   2. Sample Notices Data (Notification Bar)
   ========================================================================== */
const sampleNotices = [
  {
    id: 1,
    text_en: "Postal services to Israel, Qatar, Saudi Arabia and Lebanon are temporarily suspended.",
    text_si: "ඊශ්‍රායලය, කටාර්, සෞදි අරාබිය සහ ලෙබනනය වෙත තැපැල් සේවාවන් තාවකාලිකව අත්හිටුවා ඇත.",
    text_ta: "இஸ்ரேல், கட்டார், சவூதி அரேபியா மற்றும் லெபனானுக்கான தபால் சேவைகள் தற்காலிகமாக இடைநிறுத்தப்பட்டுள்ளன.",
    link: "notices.html#public",
    type: "urgent"
  },
  {
    id: 2,
    text_en: "From 1 January 2026 the foreign registered postal service accepts document items only.",
    text_si: "2026 ජනවාරි 1 දින සිට විදේශ ලියාපදිංචි තැපැල් සේවාව මඟින් පිළිගනු ලබන්නේ ලේඛන අයිතම පමණි.",
    text_ta: "2026 ஜனவரி 1 முதல் வெளிநாட்டு பதிவு தபால் சேவையில் ஆவண உருப்படிகள் மட்டுமே ஏற்றுக்கொள்ளப்படும்.",
    link: "notices.html#public",
    type: "notice"
  },
  {
    id: 3,
    text_en: "Revision of local postal charges for 2026.",
    text_si: "2026 වර්ෂය සඳහා දේශීය තැපැල් ගාස්තු සංශෝධනය කිරීම.",
    text_ta: "2026 ஆம் ஆண்டிற்கான உள்நாட்டு தபால் கட்டண திருத்தம்.",
    link: "information.html#rates",
    type: "info"
  },
  {
    id: 4,
    text_en: "Supplier registration 2027 is now open.",
    text_si: "2027 සැපයුම්කරුවන් ලියාපදිංචි කිරීම දැන් විවෘතයි.",
    text_ta: "2027 ஆம் ஆண்டிற்கான வழங்குநர் பதிவு இப்போது ஆரம்பிக்கப்பட்டுள்ளது.",
    link: "notices.html#procurement",
    type: "procurement"
  }
];

/* ==========================================================================
   3. Application State & Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNotificationBell();
  initNotificationTicker();
  initSliders();
  initChatbot();
  initHotlineMenu();
  initMobileNav();
  initCopyrightYear();
  initAboutPage();
  initInformationPage();
  initContactPage();
  initNoticesPage();
});

/* --------------------------------------------------------------------------
   4. Theme Management (Light / Dark Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const drawerToggleBtn = document.getElementById('drawer-theme-toggle');
  const storedTheme = localStorage.getItem('slpost_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  function handleToggle() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('slpost_theme', nextTheme);
  }

  if (toggleBtn) toggleBtn.addEventListener('click', handleToggle);
  if (drawerToggleBtn) drawerToggleBtn.addEventListener('click', handleToggle);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  document.querySelectorAll('#theme-toggle, #drawer-theme-toggle').forEach(btn => {
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  });
}

/* --------------------------------------------------------------------------
   5. Multi-language Switching
   -------------------------------------------------------------------------- */
let currentLang = 'en';

function initLanguage() {
  const storedLang = localStorage.getItem('slpost_lang') || 'en';
  setLanguage(storedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.currentTarget.getAttribute('data-lang');
      if (selected && selected !== currentLang) {
        setLanguage(selected);
      }
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('slpost_lang', lang);

  // Update active state in all segmented controls (desktop + mobile drawer)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-current', 'true');
    } else {
      btn.classList.remove('active');
      btn.removeAttribute('aria-current');
    }
  });

  // Translate all DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName.toLowerCase() === 'title') {
        document.title = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Translate aria-labels where specified
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (translations[lang][key]) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  // Refresh current notice in ticker
  if (typeof updateActiveNoticeText === 'function') {
    updateActiveNoticeText();
  }
}

/* --------------------------------------------------------------------------
   6. Notification Permission Bell & Toast
   -------------------------------------------------------------------------- */
function initNotificationBell() {
  const bellBtns = document.querySelectorAll('#notification-btn, #drawer-notification-btn');
  const toast = document.getElementById('notif-toast');

  bellBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      // NOTE: Real push notifications require a Service Worker and Web Push backend infrastructure.
      if (!('Notification' in window)) {
        showToast('Your browser does not support notifications.');
        return;
      }

      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          showToast('Notifications are on');
        } else if (permission === 'denied') {
          showToast('Notifications are blocked in your browser settings');
        } else {
          showToast('Notification permission was dismissed');
        }
      } catch (err) {
        showToast('Unable to request notifications.');
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}

/* --------------------------------------------------------------------------
   7. Cricket Scoreboard Notification Bar
   -------------------------------------------------------------------------- */
let activeNoticeIndex = 0;
let isNotifPaused = false;
let notifTimer = null;

function updateActiveNoticeText() {
  const container = document.getElementById('notif-viewport');
  if (!container) return;
  const currentItem = container.querySelector('.notif-item.is-current');
  if (currentItem) {
    const notice = sampleNotices[activeNoticeIndex];
    const link = currentItem.querySelector('.notif-link');
    if (link) {
      link.textContent = notice[`text_${currentLang}`] || notice.text_en;
    }
  }
}

function initNotificationTicker() {
  const bar = document.querySelector('.notification-bar');
  const viewport = document.getElementById('notif-viewport');
  const counter = document.getElementById('notif-counter');
  const pauseBtn = document.getElementById('notif-pause-btn');

  if (!bar || !viewport || !sampleNotices.length) return;

  function renderNotice(index, directionClass = '') {
    const notice = sampleNotices[index];
    const text = notice[`text_${currentLang}`] || notice.text_en;

    const existingCurrent = viewport.querySelector('.notif-item.is-current');
    if (existingCurrent) {
      existingCurrent.classList.remove('is-current');
      existingCurrent.classList.add('slide-out');
      setTimeout(() => {
        if (existingCurrent.parentNode) existingCurrent.remove();
      }, 550);
    }

    const newItem = document.createElement('div');
    newItem.className = `notif-item ${directionClass}`;
    newItem.setAttribute('role', 'status');

    const link = document.createElement('a');
    link.href = notice.link || 'coming-soon.html';
    link.className = 'notif-link';
    link.textContent = text;
    newItem.appendChild(link);

    viewport.appendChild(newItem);

    // Force reflow for CSS transition
    void newItem.offsetWidth;
    newItem.classList.add('is-current');

    if (counter) {
      counter.textContent = `${index + 1} / ${sampleNotices.length}`;
    }
  }

  function nextNotice() {
    activeNoticeIndex = (activeNoticeIndex + 1) % sampleNotices.length;
    renderNotice(activeNoticeIndex, 'from-top');
  }

  function startTimer() {
    stopTimer();
    if (!isNotifPaused) {
      notifTimer = setInterval(nextNotice, NOTIF_INTERVAL);
    }
  }

  function stopTimer() {
    if (notifTimer) {
      clearInterval(notifTimer);
      notifTimer = null;
    }
  }

  // Initial render
  renderNotice(activeNoticeIndex);
  startTimer();

  // Accessibility: Pause on hover and focus
  bar.addEventListener('mouseenter', () => stopTimer());
  bar.addEventListener('mouseleave', () => {
    if (!isNotifPaused) startTimer();
  });
  bar.addEventListener('focusin', () => stopTimer());
  bar.addEventListener('focusout', () => {
    if (!isNotifPaused) startTimer();
  });

  // Pause / Play Button Toggle
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      isNotifPaused = !isNotifPaused;
      const pauseIcon = pauseBtn.querySelector('.icon-pause');
      const playIcon = pauseBtn.querySelector('.icon-play');

      if (isNotifPaused) {
        stopTimer();
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playIcon) playIcon.style.display = 'block';
        pauseBtn.setAttribute('aria-label', translations[currentLang]?.nav_play_alert || 'Play alerts');
        pauseBtn.setAttribute('title', translations[currentLang]?.nav_play_alert || 'Play alerts');
      } else {
        startTimer();
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playIcon) playIcon.style.display = 'none';
        pauseBtn.setAttribute('aria-label', translations[currentLang]?.nav_pause_alert || 'Pause alerts');
        pauseBtn.setAttribute('title', translations[currentLang]?.nav_pause_alert || 'Pause alerts');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   8. Accessible Hero Sliders (Home & Services)
   -------------------------------------------------------------------------- */
function initSliders() {
  const sliderContainers = document.querySelectorAll('.hero-slider-section');

  sliderContainers.forEach(slider => {
    const slides = slider.querySelectorAll('.slide-item');
    const dots = slider.querySelectorAll('.slider-dot-btn');
    const prevBtn = slider.querySelector('.slider-arrow-prev');
    const nextBtn = slider.querySelector('.slider-arrow-next');
    if (!slides.length) return;

    let currentIndex = 0;
    let slideTimer = null;
    let isPaused = false;
    let touchStartX = 0;
    let touchEndX = 0;

    function goToSlide(index) {
      slides[currentIndex].classList.remove('active');
      slides[currentIndex].setAttribute('aria-hidden', 'true');
      if (dots[currentIndex]) {
        dots[currentIndex].classList.remove('active');
        dots[currentIndex].removeAttribute('aria-current');
      }

      currentIndex = (index + slides.length) % slides.length;

      slides[currentIndex].classList.add('active');
      slides[currentIndex].setAttribute('aria-hidden', 'false');
      if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
        dots[currentIndex].setAttribute('aria-current', 'step');
      }
    }

    function startAutoSlide() {
      stopAutoSlide();
      if (!isPaused) {
        slideTimer = setInterval(() => {
          goToSlide(currentIndex + 1);
        }, AUTO_SLIDE_INTERVAL);
      }
    }

    function stopAutoSlide() {
      if (slideTimer) {
        clearInterval(slideTimer);
        slideTimer = null;
      }
    }

    // Prev / Next Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        startAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        startAutoSlide();
      });
    }

    // Pagination Dots
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startAutoSlide();
      });
    });

    // Pause when interacting with controls or buttons
    const interactiveControls = slider.querySelectorAll('.slider-arrow-btn, .slider-dots-list, .slide-buttons-group');
    interactiveControls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        isPaused = true;
        stopAutoSlide();
      });
      el.addEventListener('mouseleave', () => {
        isPaused = false;
        startAutoSlide();
      });
    });

    slider.addEventListener('focusin', () => {
      isPaused = true;
      stopAutoSlide();
    });

    slider.addEventListener('focusout', () => {
      isPaused = false;
      startAutoSlide();
    });

    // Keyboard Arrows
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
        startAutoSlide();
      } else if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
        startAutoSlide();
      }
    });

    // Touch Swipe Support
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 45) {
        if (swipeDistance < 0) {
          goToSlide(currentIndex + 1); // Swipe left -> Next
        } else {
          goToSlide(currentIndex - 1); // Swipe right -> Prev
        }
        startAutoSlide();
      }
    }

    // Initialize first slide
    goToSlide(0);
    startAutoSlide();
  });
}

/* --------------------------------------------------------------------------
   9. Chatbot Dialog Panel
   -------------------------------------------------------------------------- */
function initChatbot() {
  const triggerBtn = document.getElementById('chatbot-toggle-btn');
  const panel = document.getElementById('chatbot-panel');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const messagesContainer = document.getElementById('chatbot-messages');
  const quickReplyButtons = document.querySelectorAll('.faq-quick-btn');

  if (!triggerBtn || !panel) return;

  function openChatbot() {
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    triggerBtn.setAttribute('aria-expanded', 'true');
    closeBtn?.focus();
    document.addEventListener('keydown', handleKeydown);
  }

  function closeChatbot() {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    triggerBtn.setAttribute('aria-expanded', 'false');
    triggerBtn.focus();
    document.removeEventListener('keydown', handleKeydown);
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      closeChatbot();
    }
  }

  triggerBtn.addEventListener('click', () => {
    const isOpen = panel.classList.contains('is-open');
    if (isOpen) {
      closeChatbot();
    } else {
      openChatbot();
    }
  });

  closeBtn?.addEventListener('click', closeChatbot);

  // Quick reply questions handling
  quickReplyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const qKey = btn.getAttribute('data-question-key');
      const aKey = btn.getAttribute('data-answer-key');
      const userQuestion = translations[currentLang]?.[qKey] || btn.textContent.trim();
      const botAnswer = translations[currentLang]?.[aKey] || "Please visit our services page or call 1950.";

      // 1. Post User Message
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble bubble-user';
      userBubble.textContent = userQuestion;
      messagesContainer.appendChild(userBubble);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      // 2. Disable button temporarily
      btn.disabled = true;

      // 3. Post Bot Response with small delay
      setTimeout(() => {
        const botBubble = document.createElement('div');
        botBubble.className = 'chat-bubble bubble-bot';
        botBubble.textContent = botAnswer;
        messagesContainer.appendChild(botBubble);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        btn.disabled = false;
      }, 350);
    });
  });
}

/* --------------------------------------------------------------------------
   10. Hotline Floating Menu
   -------------------------------------------------------------------------- */
function initHotlineMenu() {
  const hotlineBtn = document.getElementById('hotline-toggle-btn');
  const popover = document.getElementById('hotline-popover');
  const whatsappLink = document.getElementById('hotline-wa-link');

  if (!hotlineBtn || !popover) return;

  // Set WhatsApp pre-filled link
  if (whatsappLink) {
    const encodedMessage = encodeURIComponent('Get SMS and WhatsApp alerts');
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }

  function toggleHotline(e) {
    e.stopPropagation();
    const isOpen = popover.classList.contains('is-open');
    if (isOpen) {
      closeHotline();
    } else {
      popover.classList.add('is-open');
      popover.setAttribute('aria-hidden', 'false');
      hotlineBtn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHotline() {
    popover.classList.remove('is-open');
    popover.setAttribute('aria-hidden', 'true');
    hotlineBtn.setAttribute('aria-expanded', 'false');
  }

  hotlineBtn.addEventListener('click', toggleHotline);

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && !hotlineBtn.contains(e.target)) {
      closeHotline();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popover.classList.contains('is-open')) {
      closeHotline();
      hotlineBtn.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   11. Mobile Navigation Hamburger & Dropdowns
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('nav-hamburger-btn');
  const mobileMenu = document.getElementById('nav-links-menu');

  if (!hamburgerBtn || !mobileMenu) return;

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('is-open');
    if (isOpen) {
      mobileMenu.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.add('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // Mobile Accordion Dropdowns
  const dropdownToggles = mobileMenu.querySelectorAll('.nav-item.has-dropdown > .nav-link');
  dropdownToggles.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth < 1100) {
        e.preventDefault();
        const parent = link.closest('.nav-item');
        parent.classList.toggle('is-open');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   12. Dynamic Copyright Year
   -------------------------------------------------------------------------- */
function initCopyrightYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   13. About Page Logic
   ========================================================================== */

/* The source text also mentions 4,692 offices, which conflicts with 4,138; 4,138 is used because it has a breakdown that adds up, verify with the department. */

function initAboutPage() {
  const aboutPageRoot = document.getElementById('vision-mission');
  if (!aboutPageRoot) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Smooth Scrolling for Banner Pill Links
  const pillLinks = document.querySelectorAll('.banner-pill-link[href^="#"]');
  pillLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });

  // 2. Vision and Mission SVG Connection Line & Title Animations
  const vmSection = document.getElementById('vision-mission');
  const connectingPath = document.getElementById('vm-connecting-path');
  const vmNodes = document.querySelectorAll('.vm-dot-node, .vm-ref-dot, .vm-ref-node');
  const vmTitles = document.querySelectorAll('.vm-title, .vm-block-title, .vm-ref-heading');

  if (connectingPath) {
    try {
      const pathLength = connectingPath.getTotalLength();
      connectingPath.style.strokeDasharray = `${pathLength}`;
      connectingPath.style.strokeDashoffset = prefersReducedMotion ? '0' : `${pathLength}`;
      connectingPath.style.transition = prefersReducedMotion ? 'none' : 'stroke-dashoffset 1.8s cubic-bezier(0.25, 1, 0.5, 1)';
    } catch (err) {
      connectingPath.style.strokeDashoffset = '0';
    }
  }

  if (vmSection && 'IntersectionObserver' in window) {
    const vmObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (connectingPath && !prefersReducedMotion) {
            connectingPath.style.strokeDashoffset = '0';
          }
          vmTitles.forEach(t => t.classList.add('in-view'));
          vmNodes.forEach(node => node.classList.add('pulsed'));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    vmObserver.observe(vmSection);
  } else {
    if (connectingPath) connectingPath.style.strokeDashoffset = '0';
    vmTitles.forEach(t => t.classList.add('in-view'));
    vmNodes.forEach(node => node.classList.add('pulsed'));
  }

  // 3. Dynamic Service Years KPI Calculation
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - 1798;
  const yearsCounterEl = document.getElementById('kpi-years-val');
  if (yearsCounterEl) {
    yearsCounterEl.setAttribute('data-target', yearsOfService);
    yearsCounterEl.setAttribute('aria-label', `${yearsOfService} plus years of service`);
  }

  // 4. KPI Animated Counters & Network Bar (Triggered by IntersectionObserver at 40% visibility)
  const insightsSection = document.getElementById('insights');
  const counterElements = document.querySelectorAll('.kpi-num[data-target]');
  const networkSegments = document.querySelectorAll('.network-bar-segment[data-width]');

  let countersAnimated = false;

  function runCountersAnimation() {
    if (countersAnimated) return;
    countersAnimated = true;

    // Animate Network Bar Segments
    networkSegments.forEach(segment => {
      const targetWidth = segment.getAttribute('data-width');
      if (prefersReducedMotion) {
        segment.style.width = targetWidth;
      } else {
        segment.style.transition = 'width 1.5s cubic-bezier(0.25, 1, 0.5, 1)';
        segment.style.width = targetWidth;
      }
    });

    // Animate KPI Numeric Counters
    counterElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target')) || 0;
      const isInteger = Number.isInteger(target);
      const hasPlus = el.getAttribute('data-plus') === 'true';
      const duration = 1800; // ms

      if (prefersReducedMotion) {
        el.textContent = isInteger ? target.toLocaleString('en-US') + (hasPlus ? '+' : '') : target.toString();
        return;
      }

      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(target * easeOut);

        el.textContent = currentVal.toLocaleString('en-US') + (hasPlus ? '+' : '');

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString('en-US') + (hasPlus ? '+' : '');
        }
      }

      requestAnimationFrame(step);
    });
  }

  if (insightsSection && 'IntersectionObserver' in window) {
    const insightsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCountersAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    insightsObserver.observe(insightsSection);
  } else {
    runCountersAnimation();
  }

  // 5. Accessible Vertical Tabs for Desktop (>= 900px)
  initFunctionsTabs();
}

/**
 * Accessible Vertical Tabs for Desktop (role="tablist", aria-selected, arrow navigation)
 */
function initFunctionsTabs() {
  const tabList = document.querySelector('.functions-tabs-list[role="tablist"]');
  if (!tabList) return;

  const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const panels = Array.from(document.querySelectorAll('.function-tab-panel[role="tabpanel"]'));

  function activateTab(tab, focus = true) {
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
      t.classList.remove('is-active');
    });

    panels.forEach(p => {
      p.hidden = true;
      p.classList.remove('is-active');
    });

    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    tab.classList.add('is-active');

    const targetPanelId = tab.getAttribute('aria-controls');
    const targetPanel = document.getElementById(targetPanelId);
    if (targetPanel) {
      targetPanel.hidden = false;
      requestAnimationFrame(() => {
        targetPanel.classList.add('is-active');
      });
    }

    if (focus) {
      tab.focus();
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      activateTab(tab, false);
    });

    tab.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        targetIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        targetIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetIndex = tabs.length - 1;
      }

      if (targetIndex !== null) {
        activateTab(tabs[targetIndex], true);
      }
    });
  });
}

/* ==========================================================================
   14. Information Page Logic
   ========================================================================== */
function initInformationPage() {
  const infoPageRoot = document.querySelector('.info-banner');
  if (!infoPageRoot) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Smooth Scrolling for Jump Pills & Bento Links
  const internalPills = document.querySelectorAll('.info-pills-row a[href^="#"], .info-bento-card a[href^="#"]');
  internalPills.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });

  // 2. Global Banner Search (Jumps to or filters Postal Codes / Resources)
  const globalSearchInput = document.getElementById('info-global-search');
  const globalSearchClear = document.getElementById('info-search-clear');
  const postcodeSearchInput = document.getElementById('postcode-search-input');

  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', () => {
      const q = globalSearchInput.value.trim();
      if (globalSearchClear) {
        globalSearchClear.style.display = q ? 'flex' : 'none';
      }
      if (postcodeSearchInput) {
        postcodeSearchInput.value = q;
        filterPostcodes();
      }
    });

    globalSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = globalSearchInput.value.trim().toLowerCase();
        if (q.includes('rate') || q.includes('tariff') || q.includes('price')) {
          const el = document.getElementById('rates');
          if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        } else if (q.includes('form') || q.includes('pdf') || q.includes('download')) {
          const el = document.getElementById('forms');
          if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        } else if (q.includes('prohibit') || q.includes('danger') || q.includes('restrict')) {
          const el = document.getElementById('prohibited-items');
          if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        } else if (q.includes('rti') || q.includes('information act')) {
          const el = document.getElementById('rti');
          if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        } else if (q.includes('charter') || q.includes('standard') || q.includes('delivery')) {
          const el = document.getElementById('standards');
          if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        } else {
          const el = document.getElementById('postal-codes');
          if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      }
    });

    if (globalSearchClear) {
      globalSearchClear.addEventListener('click', () => {
        globalSearchInput.value = '';
        globalSearchClear.style.display = 'none';
        if (postcodeSearchInput) {
          postcodeSearchInput.value = '';
          filterPostcodes();
        }
      });
    }
  }

  // 3. Postal Codes Filter & Search
  const postcodeTableBody = document.getElementById('codes-table-body');
  const postcodeClearBtn = document.getElementById('postcode-clear-btn');
  const countDisplay = document.getElementById('codes-visible-count');
  const noResultsRow = document.getElementById('codes-no-results');
  const provPills = document.querySelectorAll('.prov-pill');
  let activeProvince = 'all';

  function filterPostcodes() {
    if (!postcodeTableBody) return;
    const q = (postcodeSearchInput?.value || '').trim().toLowerCase();
    const rows = postcodeTableBody.querySelectorAll('tr');
    let visibleCount = 0;

    rows.forEach(row => {
      const code = (row.getAttribute('data-code') || '').toLowerCase();
      const office = (row.getAttribute('data-office') || '').toLowerCase();
      const district = (row.getAttribute('data-district') || '').toLowerCase();
      const province = row.getAttribute('data-province') || '';

      const matchesText = !q || code.includes(q) || office.includes(q) || district.includes(q) || province.toLowerCase().includes(q);
      const matchesProv = activeProvince === 'all' || province === activeProvince;

      if (matchesText && matchesProv) {
        row.style.display = '';
        visibleCount++;
      } else {
        row.style.display = 'none';
      }
    });

    if (countDisplay) {
      countDisplay.textContent = visibleCount;
    }
    if (noResultsRow) {
      noResultsRow.style.display = visibleCount === 0 ? 'block' : 'none';
    }
    if (postcodeClearBtn) {
      postcodeClearBtn.style.display = q ? 'block' : 'none';
    }
  }

  if (postcodeSearchInput) {
    postcodeSearchInput.addEventListener('input', filterPostcodes);
  }

  if (postcodeClearBtn) {
    postcodeClearBtn.addEventListener('click', () => {
      if (postcodeSearchInput) postcodeSearchInput.value = '';
      if (globalSearchInput) globalSearchInput.value = '';
      filterPostcodes();
    });
  }

  provPills.forEach(pill => {
    pill.addEventListener('click', () => {
      provPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeProvince = pill.getAttribute('data-province') || 'all';
      filterPostcodes();
    });
  });

  // 4. One-Click Copy Postal Code with Toast
  const copyButtons = document.querySelectorAll('.copy-code-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      if (!code) return;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.textContent;
        const currentLang = localStorage.getItem('slpost_lang') || 'en';
        const copiedLabel = (translations[currentLang] && translations[currentLang].info_codes_copied) || 'Copied!';
        btn.textContent = copiedLabel;
        btn.style.background = 'var(--color-navy)';
        btn.style.color = '#ffffff';
        showToast(`Postal code ${code} copied to clipboard!`);
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 2000);
      }).catch(() => {
        showToast(`Postal code: ${code}`);
      });
    });
  });

  // 5. Rates Category Tab Switching
  const rateTabs = document.querySelectorAll('.rate-tab-btn');
  const ratePanels = document.querySelectorAll('.rate-tab-panel');

  rateTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      rateTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      ratePanels.forEach(p => {
        p.classList.remove('active');
        p.hidden = true;
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const targetPanelId = tab.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.hidden = false;
      }
    });
  });

  // 6. Download Form Buttons (Feedback simulation)
  const downloadBtns = document.querySelectorAll('.form-download-btn');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const formName = btn.getAttribute('data-form') || 'official_form.pdf';
      showToast(`Preparing download: ${formName}...`);
    });
  });
}

/* ==========================================================================
   15. Contact Us Page Logic
   ========================================================================== */
function initContactPage() {
  const contactPageRoot = document.querySelector('.contact-banner');
  if (!contactPageRoot) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Smooth scroll for banner jump pills
  const jumpPills = document.querySelectorAll('.contact-pills-row a[href^="#"]');
  jumpPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const targetId = pill.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });

  // 2. Interactive Inquiry Form Submission
  const inquiryForm = document.getElementById('citizen-inquiry-form');
  const formSuccessBox = document.getElementById('contact-form-success');
  const ticketSpan = document.getElementById('inquiry-ticket-num');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('inq-name');
      const emailInput = document.getElementById('inq-email');
      const phoneInput = document.getElementById('inq-phone');
      const categoryInput = document.getElementById('inq-category');
      const subjectInput = document.getElementById('inq-subject');
      const messageInput = document.getElementById('inq-message');

      if (!nameInput?.value.trim() || !emailInput?.value.trim() || !messageInput?.value.trim()) {
        showToast('Please fill in your name, email, and message details.');
        return;
      }

      // Generate random official ticket code
      const randomTicket = 'SLP-2026-INQ-' + Math.floor(10000 + Math.random() * 90000);
      if (ticketSpan) {
        ticketSpan.textContent = randomTicket;
      }

      if (formSuccessBox) {
        formSuccessBox.style.display = 'block';
        formSuccessBox.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }

      showToast(`Inquiry registered successfully! Reference: ${randomTicket}`);
      inquiryForm.reset();
    });
  }

  // 3. Quick Copy for Phone Numbers & Emails
  const copyContactBtns = document.querySelectorAll('.contact-quick-copy');
  copyContactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-val') || btn.textContent.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied: ${textToCopy}`);
      }).catch(() => {
        showToast(textToCopy);
      });
    });
  });
}

/* ==========================================================================
   16. Notices Page Logic
   ========================================================================== */
function initNoticesPage() {
  const noticesPageRoot = document.querySelector('.notices-banner');
  if (!noticesPageRoot) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Filter Pills (All, Public, Procurement, Vacancies, Reports)
  const filterPills = document.querySelectorAll('.notice-filter-pill');
  const noticeCards = document.querySelectorAll('.notice-feed-card');
  const searchInput = document.getElementById('notices-search-input');
  const clearSearchBtn = document.getElementById('notices-search-clear');
  const statusCount = document.getElementById('notices-visible-count');
  const noResultsBox = document.getElementById('notices-no-results');

  let activeCategory = 'all';

  function filterNotices() {
    const q = (searchInput?.value || '').trim().toLowerCase();
    let visibleCount = 0;

    noticeCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = (card.querySelector('.notice-card-title')?.textContent || '').toLowerCase();
      const cardRef = (card.querySelector('.notice-ref-badge')?.textContent || '').toLowerCase();
      const cardDesc = (card.querySelector('.notice-card-desc')?.textContent || '').toLowerCase();

      const matchesCat = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesQuery = !q || cardTitle.includes(q) || cardRef.includes(q) || cardDesc.includes(q);

      if (matchesCat && matchesQuery) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (statusCount) {
      statusCount.textContent = visibleCount;
    }
    if (noResultsBox) {
      noResultsBox.style.display = visibleCount === 0 ? 'block' : 'none';
    }
    if (clearSearchBtn) {
      clearSearchBtn.style.display = q ? 'flex' : 'none';
    }
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category') || 'all';
      filterNotices();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterNotices);
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      filterNotices();
    });
  }

  // 2. Hash-based direct category opening (e.g. #public, #procurement, #vacancies, #reports)
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const matchingPill = document.querySelector(`.notice-filter-pill[data-category="${hash}"]`);
    if (matchingPill) {
      matchingPill.click();
    }
  }

  // 3. Download notice actions
  const noticeDownloadBtns = document.querySelectorAll('.notice-download-action');
  noticeDownloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const ref = btn.getAttribute('data-ref') || 'Gazette Document';
      showToast(`Downloading: ${ref}...`);
    });
  });
}


