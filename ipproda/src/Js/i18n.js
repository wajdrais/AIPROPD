import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("language") || "en"; 

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // navbar
        HOME: "HOME",
        "ABOUT US": "ABOUT US",
        SERVICES: "SERVICES",
        NEWS: "NEWS",
        "CONTACT US": "CONTACT US",
        //ABOUT US
        ABOUT: "ABOUT",
        US: "US",
        "About paragraph 1":
          "We are the International Agency <strong>AIPROPD</strong> for private investigations. We help countries obtain the information they need from abroad or within their own country to reveal the truth and uncover hidden facts. We conduct investigations independently and neutrally, regardless of who the party, person, country, or location may be. Our concern is to give every right its due with utmost accuracy, professionalism, and expertise. We risk our lives for you, for those you love, and for your rights that they wish to take away from you", // Added a period
        "About paragraph 2":
          "Our specialty is proving the right for its owners when they face problems with their government or individuals in the police or government, even those in high positions who want to bury your case or deny your rights. We strive to uncover the truth and obtain the rights of oppressed people or individuals dealing with those in power who have connections that help them conceal the truth. We work against these people legally to reveal what they hide or manipulate the facts for the benefit of certain individuals, governments, or entities. Our goal is to uncover hidden truths", // Added a period
        //OUR SERVICES
        OUR_SERVICES: "OUR SERVICES",
        Service1: "Intelligence Collection",
        Service1_descr:
          "We specialize in collecting vital intelligence information needed by countries. We provide security agencies with the necessary information to perform their duties effectively. All operations are conducted within the legal framework to ensure compliance with applicable laws.",
        Service2: "Tracking Wanted Individuals",
        Service2_descr:
          "We track individuals wanted by justice or governments, providing accurate and reliable information to ensure justice is served. We operate within legal boundaries and offer necessary support to relevant authorities.",
          Service3:"Assistance to Kidnapping Victims",
          Service3_descr:"We assist those who have lost a family member due to kidnapping in their safe return by effectively coordinating with all security agencies. We provide psychological and emotional support to families and work diligently to recover the kidnapped individuals safely. Our commitment is to ensure the safety of every member of the community.",
          "IN WHAT WE SPECIALIZE":"IN WHAT WE SPECIALIZE",
          Service4:"COMPREHENSIVE INVESTIGATIVE SERVICES",
          Service4_descr:"AIPROPD Private Detective Agency is frequently engaged by insurance companies, law firms, corporations, businesses, and individuals to gather crucial information, collect evidence, and conduct interviews with witnesses, suspects, and criminals. Our investigators are well-versed in the legal framework governing investigative methods, including physical and electronic surveillance, proprietary database searches, and other research techniques to uncover the information needed by our clients.",
          Service5:"CIVIL AND CRIMINAL PRE-TRIAL INVESTIGATIONS",
          Service5_descr:"AIPROPD assists in legal cases, providing investigative support for both civil and criminal matters before they go to trial. We work closely with legal teams from both defense and prosecution, ensuring a comprehensive and unbiased investigation to uncover the facts necessary for the case.",
          Service6:"PRE-EMPLOYMENT BACKGROUND CHECKS",
          Service6_descr:"Our approach to background screening is tailored specifically for your requirements. We do not offer generic checks; instead, we design our services to align with your unique needs!",
          Service7:"SURVEILLANCE SERVICES",
          Service7_descr:"Our surveillance services include comprehensive video monitoring and precise GPS tracking to ensure thorough observation and analysis.",
          Service8:"DIVERSION INVESTIGATIONS",
          Service8_descr:"AIPROPD specializes in thorough investigations concerning diversion cases. Our skilled team conducts surveillance, performs undercover purchases, and follows a meticulous investigation process to gather evidence and pinpoint the reasons behind your profit and product losses.",
          Service9:"UNDERCOVER INVESTIGATIONS",
          Service9_descr:"AIPROPD specializes in conducting various undercover operations tailored to meet the unique needs of our clients. Our trained investigators discreetly gather evidence and conduct surveillance to uncover the truth in sensitive situations.", 
          Service10:"MISSING PERSONS",
          Service10_descr:"AIPROPD focuses on investigating cases of missing individuals, addressing various contributing factors such as substance abuse, mental health issues, abductions, and domestic violence. Our dedicated team employs comprehensive strategies to locate and assist those who have disappeared under troubling circumstances.",
          Service11:"EXPERT LAWYER SERVICES",
          Service11_descr:"AIPROPD has a full team of highly skilled lawyers providing tailored legal services for individuals and businesses. Our legal professionals specialize in criminal, civil, and corporate law, offering expert advice, strategic representation, and effective solutions. We are committed to handling your legal needs with the utmost professionalism and confidentiality. Whether it's complex legal disputes or general legal advice, our team of lawyers is ready to guide you through every challenge.",
          Service12:"EXPERTISE IN COUNTERTERRORISM",
          Service12_descr:"We specialize in collecting and analyzing intelligence, surveillance, inquiries, and infiltrating terrorist groups using our advanced and precise technologies. We work on analyzing data and news with extreme accuracy to provide detailed and reliable information. We supply any country in the world that needs precise information about its terrorist citizens, wherever they may be. Our goal is to provide effective solutions for combating terrorism worldwide. We also strive to help families who have lost members due to brainwashing and recruitment into fighting or launching attacks on various countries or entities. We work to return those who wish to come back to their homeland and families after realizing they were victims of brainwashing or deceit, finding themselves forced to join terrorist groups they were unaware of before. Our team is ready to travel and risk their lives for you, aiming to bring your loved ones and children back to their home country. We aim to gather information that contributes to the fight against terrorism for all countries combating extremism and terrorism.",
          //NEWSLETTER
        LATEST_NEWS: "LATEST NEWS",
        "SUBSCRIBE TO OUR NEWSLETTER": "SUBSCRIBE TO OUR NEWSLETTER",
        Full_Name: "Full Name",
        Email_Address: "Email Address",
        Phone_Number:
          "Phone number (You have to write the international dialing code)",
        CONFIRM: "CONFIRM",
        SUBSCRIPTION_FAILED:
          "Subscription could not be completed. Please attempt again.",
        SUBSCRIPTION_SUCCESSFUL: "Subscription successful.",
        //Fillform
        Form_Successfully: "Form submitted successfully!",
        Submission_failed: "Submission failed.",
        PART1: "IF YOU'RE FACING ANY ISSUES, FEEL FREE TO REACH OUT TO US",
        PART2: "WE'RE HERE TO HELP AND SUPPORT YOU",
        Name: "Enter you name",
        Email: "Enter your Email",
        Message: "Feel free to enter your message",
        Button_Form: "Send the message",
        Company_name: "International Professional Private Detective Agency",
        OFFICE_HOURS: "OFFICE HOURS",
        OPEN: "Monday - Friday: 08:30 - 16:30",
        REST:"Rest time : 12:00 - 13.30",
        ADDRESS: "ADDRESS",
        RESERVED: "AIPROPD ® 2021 - All Rights Reserved",
        
      },
    },
    fr: {
      translation: {
        // NAVBAR
        HOME: "ACCUEIL",
        "ABOUT US": "À PROPOS DE NOUS",
        SERVICES: "SERVICES",
        NEWS: "ACTUALITÉS",
        "CONTACT US": "CONTACTEZ-NOUS",
        // ABOUT US
        ABOUT: "À PROPOS",
        US: "DE NOUS",
        "About paragraph 1":
          "Nous sommes l'agence internationale AIPROPD pour les enquêtes privées. Nous aidons les pays à obtenir les informations dont ils ont besoin de l'étranger ou dans leur propre pays pour révéler la vérité et découvrir des faits cachés. Nous menons des enquêtes de manière indépendante et neutre, peu importe qui est la partie, la personne, le pays ou le lieu. Notre préoccupation est de donner à chaque droit ce qui lui revient avec une précision, un professionnalisme et une expertise absolus. Nous risquons nos vies pour vous, pour ceux que vous aimez et pour vos droits qu'ils souhaitent vous enlever", // Added a period
        "About paragraph 2":
          "Notre spécialité est de prouver le droit de ses propriétaires lorsqu'ils rencontrent des problèmes avec leur gouvernement ou des individus de la police ou du gouvernement, même ceux occupant des postes élevés qui souhaitent enterrer votre affaire ou nier vos droits. Nous nous efforçons de faire éclater la vérité et d'obtenir les droits des personnes opprimées ou des individus traitant avec des personnes au pouvoir ayant des relations qui les aident à dissimuler la vérité. Nous agissons légalement contre ces personnes pour révéler ce qu'elles cachent ou manipulent les faits au profit de certaines personnes, gouvernements ou entités. Notre objectif est de découvrir les vérités cachées", // Added a period
        //OUR SERVICES
        OUR_SERVICES: " NOS SERVICES",
        Service1: "Collecte de renseignements",
        Service1_descr:
          "Nous nous spécialisons dans la collecte d’informations essentielles dont les États ont besoin. Nous fournissons aux agences de sécurité les informations nécessaires pour mener à bien leurs missions. Toutes les opérations sont réalisées dans le respect du cadre légal pour garantir la conformité aux lois en vigueur.",
        Service2: "Suivi des individus recherchés",
        Service2_descr:
          "Nous traquons les individus recherchés par la justice ou par les gouvernements, fournissant des informations précises et fiables pour garantir que la justice soit rendue. Nous agissons dans le cadre des lois en vigueur et offrons le soutien nécessaire aux autorités compétentes.",
          Service3: "Assistance aux victimes d'enlèvement",
          Service3_descr:"Nous aidons les personnes ayant perdu un membre de leur famille lors d'un enlèvement à revenir en toute sécurité en coordonnant efficacement avec toutes les autorités de sécurité. Nous offrons un soutien psychologique et émotionnel aux familles et travaillons assidûment à la récupération des personnes enlevées en toute sécurité. Notre engagement est de garantir la sécurité de chaque membre de la communauté.",
          "IN WHAT WE SPECIALIZE":"DANS QUOI NOUS NOUS SPÉCIALISONS",
          Service4:"SERVICES D'ENQUÊTES COMPLÈTES",
          Service4_descr:"L'Agence de Détectives Privés AIPROPD est régulièrement sollicitée par des compagnies d'assurances, des cabinets d'avocats, des entreprises, des sociétés commerciales, et des particuliers pour recueillir des informations clés, collecter des preuves et mener des entretiens avec des témoins, des suspects et des criminels. Nos enquêteurs maîtrisent les lois régissant les méthodes d'investigation, y compris la surveillance physique et électronique, les recherches dans des bases de données exclusives, et d'autres techniques pour découvrir les informations requises par nos clients.",
          Service5:"ENQUÊTES PRÉALABLES AUX PROCÈS CIVILS ET CRIMINELS",
          Service5_descr:"AIPROPD offre son soutien en matière d'enquêtes dans les affaires civiles et pénales avant leur passage en justice. Nous collaborons avec les équipes juridiques des deux parties, défense et accusation, pour garantir une enquête approfondie et impartiale afin de découvrir les faits nécessaires à l'affaire",
          Service6:"VÉRIFICATION DES ANTÉCÉDENTS AVANT L'EMBAUCHE",
          Service6_descr:"Notre méthode de vérification des antécédents est spécifiquement adaptée à vos exigences. Nous n’offrons pas de vérifications génériques ; au contraire, nous concevons nos services pour correspondre à vos besoins uniques !",
          Service7:"SERVICES DE SURVEILLANCE",
          Service7_descr:"Nos services de surveillance comprennent une surveillance vidéo complète et un suivi GPS précis pour garantir une observation et une analyse approfondies.",
          Service8:"ENQUÊTES DE DÉTOURNEMENT",
          Service8_descr:"AIPROPD se spécialise dans les enquêtes approfondies concernant les cas de détournement. Notre équipe qualifiée effectue des surveillances, réalise des achats sous couverture et suit un processus d'enquête méticuleux pour recueillir des preuves et identifier les raisons de vos pertes de profits et de produits.",
          Service9:"ENQUÊTES SOUS COUVERTURE",
          Service9_descr:"AIPROPD est spécialisée dans la réalisation de diverses opérations sous couverture adaptées aux besoins uniques de nos clients. Nos enquêteurs formés collectent discrètement des preuves et mènent des surveillances pour révéler la vérité dans des situations sensibles.",
          Service10:"PERSONNES DISPARUES",
          Service10_descr:"AIPROPD se concentre sur l'enquête des cas de personnes disparues, en tenant compte de divers facteurs contributifs tels que l'abus de substances, les problèmes de santé mentale, les enlèvements et la violence domestique. Notre équipe dévouée utilise des stratégies complètes pour localiser et aider ceux qui ont disparu dans des circonstances troublantes.",
          Service11:"SERVICES D'AVOCATS EXPERTS",
          Service11_descr:"AIPROPD dispose d'une équipe complète d'avocats hautement qualifiés, fournissant des services juridiques personnalisés pour les particuliers et les entreprises. Nos avocats sont spécialisés en droit pénal, civil et des affaires, offrant des conseils experts, une représentation stratégique et des solutions efficaces. Nous nous engageons à traiter vos besoins juridiques avec le plus grand professionnalisme et confidentialité. Que ce soit pour des litiges juridiques complexes ou des conseils juridiques généraux, notre équipe d'avocats est prête à vous accompagner à chaque étape.",
          Service12:"EXPERTISE EN LUTTE CONTRE LE TERRORISME",
          Service12_descr:"Nous sommes spécialisés dans la collecte et l'analyse de renseignements, la surveillance, l'investigation et l'infiltration de groupes terroristes en utilisant nos technologies avancées et précises. Nous analysons les données et les nouvelles avec une précision extrême pour fournir des informations détaillées et fiables. Nous fournissons des informations précises à toute nation dans le monde qui en a besoin sur ses citoyens terroristes, où qu'ils se trouvent. Notre objectif est de proposer des solutions efficaces pour combattre le terrorisme dans le monde entier. Nous cherchons également à aider les familles qui ont perdu des membres à cause d'un lavage de cerveau et de leur recrutement dans des combats ou des attaques sur divers pays ou entités. Nous œuvrons pour ramener ceux qui souhaitent retourner dans leur pays et auprès de leurs proches après avoir réalisé qu'ils étaient victimes de lavage de cerveau ou de tromperie, se retrouvant forcés à rejoindre des groupes terroristes qu'ils ne connaissaient pas auparavant. Notre équipe est prête à voyager et à risquer sa vie pour vous, dans le but de ramener vos proches et vos enfants dans leur pays d'origine. Nous visons à recueillir des informations qui contribuent à la lutte contre le terrorisme pour toutes les nations qui luttent contre l'extrémisme et le terrorisme.",
          //NEWSLETTER
        LATEST_NEWS: "DERNIÈRES NOUVELLES",
        "SUBSCRIBE TO OUR NEWSLETTER": "ABONNEZ-VOUS À NOTRE NEWSLETTER",
        Full_Name: "Nom Complet",
        Email_Address: "Adresse e-mail",
        Phone_Number:
          "Numéro de téléphone (Vous devez écrire le code de composition international.)",
        CONFIRM: "CONFIRMER",
        SUBSCRIPTION_FAILED:
          "L'abonnement n'a pas pu être complété. Veuillez réessayer.",
        SUBSCRIPTION_SUCCESSFUL: "Abonnement réussi.",
        //Fillform
        Form_Successfully: "Formulaire soumis avec succès !",
        Submission_failed: "Échec de la soumission.",
        PART1:
          "SI VOUS RENCONTREZ DES PROBLÈMES, N'HÉSITEZ PAS À NOUS CONTACTER",
        PART2: "NOUS SOMMES ICI POUR VOUS AIDER ET VOUS SOUTENIR",
        Name: "Entrez votre nom",
        Email: "Entrez votre e-mail",
        Message: "N'hésitez pas à entrer votre message",
        Button_Form: "Envoyer message",
        //footer
        Company_name:
          "Agence Internationale de Détection Privée Professionnelle",
        OFFICE_HOURS: "HEURES DE BUREAU",
        OPEN: "Lundi - Vendredi : 08h30 - 16h30",
        REST:"Rest time : 12:00 - 13.30",
        ADDRESS: "ADRESSE",
        RESERVED: "AIPROPD ® 2021 - Tous droits réservés",
      },
    },
    de: {
      translation: {
        // NAVBAR
        HOME: "STARTSEITE",
        "ABOUT US": "ÜBER UNS",
        SERVICES: "DIENSTLEISTUNGEN",
        NEWS: "NACHRICHTEN",
        "CONTACT US": "KONTAKTIEREN SIE UNS",
        // ABOUT US
        ABOUT: "ÜBER",
        US: "UNS",
        "About paragraph 1":
          "Wir sind die Internationale Agentur AIPROPD für private Ermittlungen. Wir helfen Ländern, die Informationen zu erhalten, die sie aus dem Ausland oder innerhalb ihres eigenen Landes benötigen, um die Wahrheit zu offenbaren und verborgene Fakten aufzudecken. Wir führen Untersuchungen unabhängig und neutral durch, unabhängig davon, wer die Partei, Person, das Land oder der Ort ist. Unser Anliegen ist es, jedem Recht das ihm zustehende mit größter Genauigkeit, Professionalität und Fachwissen zu geben. Wir riskieren unser Leben für Sie, für die, die Sie lieben, und für Ihre Rechte, die man Ihnen nehmen möchte.", // Added a period
        "About paragraph 2":
          "Unser Spezialgebiet ist es, das Recht für seine Besitzer zu beweisen, wenn sie Probleme mit ihrer Regierung oder mit Personen in der Polizei oder der Regierung haben, sogar mit hochrangigen Personen, die Ihr Anliegen verbergen oder Ihre Rechte verletzen wollen. Wir bemühen uns, die Wahrheit ans Licht zu bringen und die Rechte von unterdrückten Menschen oder Personen, die mit Machthabern zu tun haben und über Verbindungen verfügen, die ihnen helfen, die Wahrheit zu verschleiern, zu erlangen. Wir arbeiten rechtlich gegen diese Personen, um das, was sie verbergen, aufzudecken oder die Fakten zu manipulieren, um bestimmten Personen, Regierungen oder Institutionen zu nutzen. Unser Ziel ist es, verborgene Wahrheiten aufzudecken.", // Added a period
        //OUR SERVICES
        OUR_SERVICES: " UNSERE DIENSTLEISTUNGEN",
        Service1: "Intelligenzbeschaffung",
        Service1_descr:
          "Wir sind spezialisiert auf das Sammeln wichtiger Informationen, die Länder benötigen. Wir bieten Sicherheitsbehörden die notwendigen Informationen, um ihre Aufgaben effektiv auszuführen. Alle Operationen werden im Rahmen des gesetzlichen Rahmens durchgeführt, um die Einhaltung der geltenden Gesetze sicherzustellen.",
        Service2: "Verfolgung von gesuchten Personen",
        Service2_descr:
          "Wir verfolgen Personen, die von der Justiz oder von Regierungen gesucht werden, und liefern genaue und zuverlässige Informationen, um sicherzustellen, dass Gerechtigkeit geübt wird. Wir handeln im Rahmen der gesetzlichen Bestimmungen und bieten den zuständigen Behörden die erforderliche Unterstützung.",
         "Service3":"Hilfe für Entführungsopfer",
          "Service3_descr":"Wir helfen Angehörigen von Entführten bei der Rückkehr ihrer Familienmitglieder, indem wir effektiv mit allen Sicherheitsbehörden zusammenarbeiten. Wir bieten psychologische und emotionale Unterstützung für die Familien und setzen uns intensiv dafür ein, die Entführten sicher zurückzubringen. Unser Engagement ist es, die Sicherheit jedes Einzelnen in der Gemeinschaft zu gewährleisten.",
          "IN WHAT WE SPECIALIZE":"WORIN WIR SPEZIALISIERT SIND",
          Service4:"UMFASSENDE ERMITTLUNGSDIENSTE",
          Service4_descr:"Die AIPROPD Privatdetektiv-Agentur wird regelmäßig von Versicherungsgesellschaften, Anwaltskanzleien, Unternehmen, Geschäftseinheiten und Privatpersonen beauftragt, um wichtige Informationen zu sammeln, Beweise zu sichern und Interviews mit Zeugen, Verdächtigen und Kriminellen zu führen. Unsere Ermittler sind mit den gesetzlichen Vorgaben für Ermittlungsverfahren vertraut, darunter physische und elektronische Überwachung, proprietäre Datenbankrecherchen und andere Forschungstechniken, die erforderlich sind, um die benötigten Informationen für unsere Kunden zu finden.",
          Service5:"VORPROZESSUALE UNTERSUCHUNGEN IM ZIVIL- UND STRAFRECHT",
          Service5_descr:"AIPROPD unterstützt juristische Verfahren, indem wir Ermittlungen sowohl für Zivil- als auch für Strafsachen vor dem Gerichtsprozess durchführen. Wir arbeiten eng mit den juristischen Teams von Verteidigung und Anklage zusammen, um eine umfassende und objektive Untersuchung der relevanten Fakten sicherzustellen.",
          Service6:"VORANSTELLUNG HINTERGRUNDÜBERPRÜFUNG",
          Service6_descr:"Unser Ansatz zur Hintergrundüberprüfung ist speziell auf Ihre Anforderungen zugeschnitten. Wir bieten keine standardisierten Prüfungen an; stattdessen gestalten wir unsere Dienstleistungen so, dass sie Ihren individuellen Bedürfnissen entsprechen!",
          Service7:"ÜBERWACHUNGS-DIENSTE",
          Service7_descr:"Unsere Überwachungsdienste umfassen umfassende Videoüberwachung und präzises GPS-Tracking, um eine gründliche Beobachtung und Analyse zu gewährleisten.",
          Service8:"UNTERSUCHUNGEN ZUR ABLEITUNG",
          Service8_descr:"AIPROPD ist auf gründliche Untersuchungen zu Ableitungsfällen spezialisiert. Unser erfahrenes Team führt Überwachungen durch, tätigt Undercover-Einkäufe und folgt einem sorgfältigen Untersuchungsprozess, um Beweise zu sammeln und die Ursachen Ihrer Gewinn- und Produktverluste zu ermitteln.",
          Service9:"VERDECKTE UNTERSUCHUNGEN",
          Service9_descr:"AIPROPD hat sich auf die Durchführung verschiedener verdeckter Operationen spezialisiert, die auf die einzigartigen Bedürfnisse unserer Kunden zugeschnitten sind. Unsere geschulten Ermittler sammeln diskret Beweise und führen Überwachungen durch, um die Wahrheit in sensiblen Situationen aufzudecken.",
          Service10:"VERMISSTE PERSONEN",
          Service10_descr:"AIPROPD konzentriert sich auf die Untersuchung von Fällen vermisster Personen und berücksichtigt dabei verschiedene beitragende Faktoren wie Drogenmissbrauch, psychische Erkrankungen, Entführungen und häusliche Gewalt. Unser engagiertes Team setzt umfassende Strategien ein, um Personen zu finden und zu unterstützen, die unter schwierigen Umständen verschwunden sind.",
          Service11:"FACHANWALTSERVICES",
          Service11_descr:"AIPROPD verfügt über ein vollständiges Team hochqualifizierter Anwälte, die maßgeschneiderte Rechtsdienstleistungen für Privatpersonen und Unternehmen anbieten. Unsere Anwälte sind auf Straf-, Zivil- und Wirtschaftsrecht spezialisiert und bieten fundierte Beratung, strategische Vertretung und effektive Lösungen. Wir verpflichten uns, Ihre rechtlichen Bedürfnisse mit höchster Professionalität und Vertraulichkeit zu behandeln. Ob es sich um komplexe Rechtsstreitigkeiten oder allgemeine Rechtsberatung handelt, unser Anwaltsteam steht Ihnen bei jedem Schritt zur Seite.",
          Service12:"FACHGEBIET TERRORISMUSBEKÄMPFUNG",
          Service12_descr:"Wir sind spezialisiert auf das Sammeln und Analysieren von Geheimdienstinformationen, Überwachung, Nachforschungen und das Eindringen in terroristische Gruppen mit Hilfe unserer fortschrittlichen und präzisen Technologien. Wir analysieren Daten und Nachrichten mit äußerster Genauigkeit, um detaillierte und verlässliche Informationen bereitzustellen. Wir unterstützen jede Nation auf der Welt, die präzise Informationen über ihre terroristischen Bürger benötigt, egal, wo sie sich befinden. Unser Ziel ist es, effektive Lösungen zur Bekämpfung des Terrorismus weltweit anzubieten. Wir streben auch danach, Familien zu helfen, die Angehörige durch Gehirnwäsche und Rekrutierung für den Kampf oder für Anschläge auf verschiedene Länder oder Ziele verloren haben. Wir arbeiten daran, diejenigen zurückzubringen, die in ihre Heimat und zu ihren Familien zurückkehren möchten, nachdem sie erkennen, dass sie Opfer von Gehirnwäsche oder Täuschung wurden und gezwungen waren, sich terroristischen Gruppen anzuschließen, von denen sie zuvor nichts wussten. Unser Team ist bereit, für Sie zu reisen und sein Leben zu riskieren, um Ihre Angehörigen und Kinder in ihr Herkunftsland zurückzubringen. Wir sammeln Informationen, die zur Terrorismusbekämpfung beitragen, und unterstützen damit alle Länder, die gegen Extremismus und Terrorismus kämpfen.",
          //NEWSLETTER
        LATEST_NEWS: "NEUESTE NACHRICHTEN",
        "SUBSCRIBE TO OUR NEWSLETTER": "ABONNIEREN SIE UNSEREN NEWSLETTER",
        Full_Name: "Vollständiger Name",
        Email_Address: "E-Mail-Adresse",
        Phone_Number:
          "Telefonnummer (Sie müssen die internationale Vorwahl schreiben.)",
        CONFIRM: "BESTÄTIGEN",
        SUBSCRIPTION_FAILED:
          "Die Anmeldung konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut.",
        SUBSCRIPTION_SUCCESSFUL: "Anmeldung erfolgreich.",
        //Fillform
        Form_Successfully: "Formular erfolgreich übermittelt !",
        Submission_failed: "Übermittlung fehlgeschlagen.",
        PART1:
          "WENN SIE AUF IRGENDWELCHE PROBLEME STOSSEN, ZÖGERN SIE NICHT, UNS ZU KONTAKTIEREN",
        PART2: "WIR SIND HIER, UM IHNEN ZU HELFEN UND SIE ZU UNTERSTÜTZEN",
        Name: "Geben Sie Ihren Namen ein",
        Email: "Geben Sie Ihre E-Mail-Adresse ein",
        Message: "Fühlen Sie sich frei, Ihre Nachricht einzugeben",
        Button_Form: "Nachricht senden",
        //footer
        Company_name: "Agentur International Professionnelle Privat Detektiv",
        OFFICE_HOURS: "BÜROZEITEN",
        OPEN: "Montag - Freitag: 08:30 - 16:30",
        REST:"Ruhezeit: 12:00 - 13:30",
        ADDRESS: "ADRESSE",
        RESERVED: "AIPROPD ® 2021 - Alle Rechte vorbehalten",
      },
    },
    ar: {
      translation: {
        // Navbar
        HOME: "الصفحة الرئيسية",
        "ABOUT US": "من نحن",
        SERVICES: "الخدمات",
        NEWS: "الأخبار",
        "CONTACT US": "اتصل بنا",
        // ABOUT US
        ABOUT: "من",
        US: "نحن",
        "About paragraph 1":"نحن الوكالة الدولية المحترفة للتحقيقات الخاصة نساعد الدول على إعطائهم معلومات يحتاجونها من خارج بلدهم أو في بلدهم و كشف الحقائق المخفية نحن نحقق بصفة مستقلة و محايدة لا يهمنا من كان الطرف أو الشخص أو البلد أو المكان همنا هو إعطاء لكل حق حقه بأسلوب في غاية من الدقة و الحرفية و الخبرة. نحن نخاطر بحياتنا من أجلك و من أجل من تحب و من أجل حقك الذي يريدون سلبه منك.", 
        "About paragraph 2":
          "إختصاصنا إثبات الحق لأصحابه عندما يواجهون مشاكل مع حكومتهم أو مع أفراد من الشرطة أو الحكومة حتى ذوي المناصب الهامة في الدولة الذين يريدون طمس قضيتكم أو هضم حقكم نسعى لكشف الحقيقة و الحصول على حقوق الناس المضطهدين أو الأشخاص الذين يتعاملون مع أفراد ذو سلطة و لهم علاقات تساعدهم على طمس الحقيقة فنحن نعمل ضد هؤلاء بالقانون لكشف ما يخفونه أو يريدون التلاعب بالحقائق لصالح أشخاص أو حكومات أو أفراد معينة غايتنا كشف الحقائق المخفية",
        //OUR SERVICES
        OUR_SERVICES: "خدماتنا",
        Service1: "جمع المعلومات الاستخباراتية",
        Service1_descr:
          "نحن متخصصون في جمع المعلومات الاستخباراتية التي تحتاجها الدول. نقدم للجهات الأمنية المعلومات اللازمة لأداء واجباتها بفعالية. تتم جميع العمليات ضمن الإطار القانوني لضمان الامتثال للقوانين المعمول بها.",
        Service2: "تتبع المطلوبين للعدالة",
        Service2_descr:
          "نقوم بتعقب الأشخاص المطلوبين للعدالة أو الدول، مع توفير معلومات دقيقة وموثوقة لضمان تحقيق العدالة. نعمل وفقًا للقوانين المعمول بها ونقدم الدعم اللازم للجهات المختصة",
          Service3: "مساعدة ضحايا الاختطاف",
          Service3_descr:"نساعد من فقد أحد أفراد عائلته في عملية اختطاف على عودته من خلال التنسيق الفعّال مع جميع الجهات الأمنية. نحن نقدم الدعم النفسي والمعنوي للعائلات، ونسعى جاهدين لاستعادة المخطوفين بأمان. التزامنا هو ضمان سلامة كل فرد من أفراد المجتمع.",
          "IN WHAT WE SPECIALIZE":"في ماذا نتخصص",
          Service4:"خدمات التحقيق الشاملة",
          Service4_descr:"الوكالة الدولية المحترفة للتحقيقات الخاصة تتعامل بانتظام مع شركات التأمين، مكاتب المحاماة، الشركات، الكيانات التجارية، والأفراد لجمع المعلومات الأساسية، جمع الأدلة، وإجراء مقابلات مع الشهود، المشتبه بهم والمجرمين. يمتلك محققونا معرفة واسعة بالقوانين التي تحكم أساليب التحقيق، بما في ذلك المراقبة المادية والإلكترونية، البحث في قواعد البيانات المملوكة، والأساليب البحثية الأخرى للكشف عن المعلومات المطلوبة من قبل عملائنا.",
          Service5:"التحقيقات ما قبل المحاكمة المدنية والجنائية",
          Service5_descr:"تساعد الوكالة الدولية المحترفة للتحقيقات الخاصة في القضايا القانونية، حيث تقدم دعمًا تحقيقيًا في القضايا المدنية والجنائية قبل أن تصل إلى المحكمة. نعمل عن كثب مع الفرق القانونية من جانبي الدفاع والادعاء لضمان تحقيق شامل وحيادي لكشف الحقائق اللازمة للقضية.",
          Service6:"فحص الخلفية قبل التوظيف",
          Service6_descr:"نهجنا في فحص الخلفية مصمم خصيصًا لتلبية احتياجاتكم. نحن لا نقدم فحوصات قياسية؛ بدلاً من ذلك، نقوم بتخصيص خدماتنا لتتناسب مع احتياجاتكم الفريدة!",
          Service7:"خدمات المراقبة",
          Service7_descr:"تشمل خدماتنا للمراقبة المراقبة بالفيديو الشاملة وتتبع نظام تحديد المواقع بدقة لضمان المراقبة والتحليل الدقيق.",
          Service8:"تحقيقات التحويل",
          Service8_descr:"تتخصص الوكالة الدولية المحترفة للتحقيقات الخاصة في التحقيقات الشاملة المتعلقة بقضايا التحويل. يقوم فريقنا المتمرس بإجراء المراقبة، وإجراء عمليات الشراء السرية، واتباع عملية تحقيق دقيقة لجمع الأدلة وتحديد أسباب خسائرك في الأرباح والمنتجات.",
          Service9:"تحقيقات سرية",
          Service9_descr:"تتخصص الوكالة الدولية المحترفة للتحقيقات الخاصة في إجراء عمليات سرية متعددة تناسب الاحتياجات الفريدة لعملائنا. يقوم محققونا المدربون بجمع الأدلة بشكل سري وإجراء المراقبة لكشف الحقيقة في الحالات الحساسة.", 
          Service10:"الأشخاص المفقودون",
          Service10_descr:"تركز الوكالة الدولية المحترفة للتحقيقات الخاصة على التحقيق في حالات الأشخاص المفقودين، مع معالجة العوامل المختلفة المساهمة مثل تعاطي المخدرات، والمشكلات النفسية، والاختطاف، والعنف المنزلي. يستخدم فريقنا المخصص استراتيجيات شاملة للعثور على الأشخاص الذين اختفوا في ظروف مقلقة.",
          Service11:"خدمات المحامين المتخصصين",
          Service11_descr:"تمتلك الوكالة الدولية المحترفة للتحقيقات الخاصة فريقًا كاملاً من المحامين ذوي المهارات العالية، الذين يقدمون خدمات قانونية مخصصة للأفراد والشركات. متخصصونا القانونيون لديهم خبرة في القانون الجنائي، المدني، وقانون الشركات، ويقدمون استشارات قانونية متقدمة، تمثيلاً استراتيجياً، وحلولًا فعالة. نحن ملتزمون بالتعامل مع احتياجاتك القانونية بأقصى درجات الاحترافية والسرية. سواء كنت تواجه قضايا قانونية معقدة أو تحتاج إلى استشارة قانونية عامة، فإن فريق محامينا هنا لدعمك في كل تحدٍ.",
          Service12:"إختصاص مكافحة الإرهاب",
          Service12_descr:"نحن متخصصون في جمع وتحليل المعلومات الاستخباراتية، والرصد، والاستعلام، واختراق الجماعات الإرهابية باستخدام تقنياتنا المتطورة والدقيقة. نعمل على تحليل البيانات والأخبار بشكل دقيق جدًا لتوفير معلومات مفصلة وموثوقة. نمد كل دولة في العالم تحتاج إلى معلومات دقيقة عن الإرهابيين من مواطنيها أينما كانوا. هدفنا هو تقديم حلول فعالة لمكافحة الإرهاب في جميع أنحاء العالم. نحن أيضًا نسعى لمساعدة العائلات التي فقدت أفرادًا من ذويها بعد تعرضهم لغسل أدمغة واستقطابهم للقتال أو للقيام بهجمات على بلدان أو جهات مختلفة. نعمل على إعادة أولئك الذين يرغبون في العودة إلى بلادهم وأهلهم بعد أن يدركوا أنهم كانوا ضحايا لغسل الدماغ أو للتحايل، حين يجدون أنفسهم مجبرين على الانضمام إلى جماعات إرهابية لم يكونوا يعلمون بها مسبقًا. فريقنا مستعد للسفر والتضحية بحياته من أجلكم، وهو يسعى لإعادة ذويكم وأبنائكم إلى وطنهم الأصلي. نهدف إلى جمع المعلومات التي تساهم في مكافحة الإرهاب لصالح كل دولة تكافح التطرف والإرهاب.",
          //NEWSLETTER
        LATEST_NEWS: "أحدث الأخبار",
        "SUBSCRIBE TO OUR NEWSLETTER": "اشترك في نشرتنا الإخبارية",
        Full_Name: "الاسم الكامل",
        Email_Address: "عنوان البريد الإلكتروني",
        Phone_Number: "رقم الهاتف (عليك كتابة رمز الاتصال الدولي.)",
        CONFIRM: "تأكيد",
        SUBSCRIPTION_FAILED: "لا يمكن إكمال الاشتراك. يرجى المحاولة مرة أخرى.",
        SUBSCRIPTION_SUCCESSFUL: "تم الاشتراك بنجاح.",
        //fillform
        Form_Successfully: "تم إرسال النموذج بنجاح!",
        Submission_failed: "فشل في الإرسال.",
        PART1: "إذا كنت تواجه أي مشكلات، فلا تتردد في التواصل معنا",
        PART2: "نحن هنا لمساعدتك ودعمك",
        Name: "أدخل اسمك",
        Email: "أدخل بريدك الإلكتروني",
        Message: "لا تتردد في إدخال رسالتك",
        Button_Form: "أرسل الرسالة",
        Company_name: "الوكالة الدولية المحترفة للتحقيقات الخاصة",
        OFFICE_HOURS: "ساعات العمل",
        OPEN: "من الإثنين إلى الجمعة: 08:30 - 16:30",
        REST:"وقت الراحة: 12:00 - 13:30",
        ADDRESS: "العنوان",
        RESERVED: "AIPROPD ® 2021 - جميع الحقوق محفوظة",
      },
    },
  },
  lng: savedLanguage, // Set the initial language to the saved one
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
