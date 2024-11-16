const questions = [
        {
            question: "Comment dit-on 'cat' en français ?",
            option1: "Chien",
            option2: "Chat",
            option3: "Souris",
            option4: "Oiseau",
            correctOption: "Chat",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'hello' en français ?",
            option1: "Bonjour",
            option2: "Au revoir",
            option3: "Merci",
            option4: "S'il vous plaît",
            correctOption: "Bonjour",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'apple' en français ?",
            option1: "Banane",
            option2: "Orange",
            option3: "Pomme",
            option4: "Raisin",
            correctOption: "Pomme",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'book' en français ?",
            option1: "Livre",
            option2: "Table",
            option3: "Stylo",
            option4: "Cahier",
            correctOption: "Livre",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'school' en français ?",
            option1: "École",
            option2: "Maison",
            option3: "Bureau",
            option4: "Jardin",
            correctOption: "École",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'car' en français ?",
            option1: "Avion",
            option2: "Bateau",
            option3: "Voiture",
            option4: "Train",
            correctOption: "Voiture",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'house' en français ?",
            option1: "Appartement",
            option2: "Hôtel",
            option3: "Maison",
            option4: "Chambre",
            correctOption: "Maison",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'water' en français ?",
            option1: "Lait",
            option2: "Eau",
            option3: "Café",
            option4: "Jus",
            correctOption: "Eau",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'bread' en français ?",
            option1: "Fromage",
            option2: "Beurre",
            option3: "Pain",
            option4: "Gâteau",
            correctOption: "Pain",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'dog' en français ?",
            option1: "Poisson",
            option2: "Chien",
            option3: "Chat",
            option4: "Cheval",
            correctOption: "Chien",
            categ: "Vocab",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'vacation' en français ?",
            option1: "Travail",
            option2: "École",
            option3: "Vacances",
            option4: "Réunion",
            correctOption: "Vacances",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'job' en français ?",
            option1: "Loisir",
            option2: "Travail",
            option3: "Amusement",
            option4: "Sport",
            correctOption: "Travail",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'to cook' en français ?",
            option1: "Manger",
            option2: "Cuire",
            option3: "Cuisiner",
            option4: "Goûter",
            correctOption: "Cuisiner",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'early' en français ?",
            option1: "Tard",
            option2: "Rapide",
            option3: "Lent",
            option4: "Tôt",
            correctOption: "Tôt",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'library' en français ?",
            option1: "Librairie",
            option2: "Bibliothèque",
            option3: "École",
            option4: "Salle",
            correctOption: "Bibliothèque",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'expensive' en français ?",
            option1: "Pas cher",
            option2: "Bon marché",
            option3: "Cher",
            option4: "Rapide",
            correctOption: "Cher",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'sometimes' en français ?",
            option1: "Toujours",
            option2: "Parfois",
            option3: "Jamais",
            option4: "Souvent",
            correctOption: "Parfois",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'neighbor' en français ?",
            option1: "Voisin",
            option2: "Amie",
            option3: "Proche",
            option4: "Collègue",
            correctOption: "Voisin",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'to clean' en français ?",
            option1: "Sauter",
            option2: "Nettoyer",
            option3: "Détruire",
            option4: "Prêter",
            correctOption: "Nettoyer",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'weather' en français ?",
            option1: "Saison",
            option2: "Climat",
            option3: "Météo",
            option4: "Température",
            correctOption: "Météo",
            categ: "Vocab",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'challenge' en français ?",
            option1: "Défi",
            option2: "Obstacle",
            option3: "Jeu",
            option4: "Victoire",
            correctOption: "Défi",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'to improve' en français ?",
            option1: "Réparer",
            option2: "Améliorer",
            option3: "Changer",
            option4: "Échanger",
            correctOption: "Améliorer",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'schedule' en français ?",
            option1: "Calendrier",
            option2: "Ordinateur",
            option3: "Horloge",
            option4: "Programme",
            correctOption: "Programme",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'relationship' en français ?",
            option1: "Amitié",
            option2: "Relation",
            option3: "Partenariat",
            option4: "Famille",
            correctOption: "Relation",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'to save money' en français ?",
            option1: "Dépenser",
            option2: "Économiser",
            option3: "Investir",
            option4: "Acheter",
            correctOption: "Économiser",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'environment' en français ?",
            option1: "Atmosphère",
            option2: "Environnement",
            option3: "Climat",
            option4: "Habitat",
            correctOption: "Environnement",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'healthcare' en français ?",
            option1: "Bien-être",
            option2: "Soins de santé",
            option3: "Santé",
            option4: "Hôpital",
            correctOption: "Soins de santé",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'to achieve' en français ?",
            option1: "Terminer",
            option2: "Gagner",
            option3: "Réaliser",
            option4: "Essayer",
            correctOption: "Réaliser",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'training' en français ?",
            option1: "Formation",
            option2: "Apprentissage",
            option3: "Exercice",
            option4: "Étude",
            correctOption: "Formation",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'average' en français ?",
            option1: "Moyen",
            option2: "Bas",
            option3: "Élevé",
            option4: "Minime",
            correctOption: "Moyen",
            categ: "Vocab",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'sustainable' en français ?",
            option1: "Renouvelable",
            option2: "Durable",
            option3: "Stable",
            option4: "Écologique",
            correctOption: "Durable",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'to emphasize' en français ?",
            option1: "Expliquer",
            option2: "Souligner",
            option3: "Illustrer",
            option4: "Suggérer",
            correctOption: "Souligner",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'policy' en français ?",
            option1: "Règle",
            option2: "Loi",
            option3: "Politique",
            option4: "Décision",
            correctOption: "Politique",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'growth' en français ?",
            option1: "Croissance",
            option2: "Augmentation",
            option3: "Élargissement",
            option4: "Développement",
            correctOption: "Croissance",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'requirement' en français ?",
            option1: "Nécessité",
            option2: "Option",
            option3: "Préférence",
            option4: "Exigence",
            correctOption: "Exigence",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'achievement' en français ?",
            option1: "Succès",
            option2: "Projet",
            option3: "Accomplissement",
            option4: "Essai",
            correctOption: "Accomplissement",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'debate' en français ?",
            option1: "Discussion",
            option2: "Dialogue",
            option3: "Débat",
            option4: "Conversation",
            correctOption: "Débat",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'to invest' en français ?",
            option1: "Dépenser",
            option2: "Utiliser",
            option3: "Investir",
            option4: "Acheter",
            correctOption: "Investir",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'to highlight' en français ?",
            option1: "Marquer",
            option2: "Surligner",
            option3: "Accentuer",
            option4: "Sous-estimer",
            correctOption: "Surligner",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'efficiency' en français ?",
            option1: "Efficacité",
            option2: "Rapidité",
            option3: "Utilité",
            option4: "Simplicité",
            correctOption: "Efficacité",
            categ: "Vocab",
            NV: "B2"
        },
        {
            question: "Comment dit-on 'framework' en français ?",
            option1: "Cadre",
            option2: "Fondation",
            option3: "Plan",
            option4: "Structure",
            correctOption: "Cadre",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'resilience' en français ?",
            option1: "Résistance",
            option2: "Résilience",
            option3: "Adaptabilité",
            option4: "Force",
            correctOption: "Résilience",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'controversy' en français ?",
            option1: "Polémique",
            option2: "Conflit",
            option3: "Discussion",
            option4: "Opposition",
            correctOption: "Polémique",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'thorough' en français ?",
            option1: "Rapide",
            option2: "Approfondi",
            option3: "Superficiel",
            option4: "Prudent",
            correctOption: "Approfondi",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'to advocate' en français ?",
            option1: "Recommander",
            option2: "Prôner",
            option3: "Suggérer",
            option4: "Parler",
            correctOption: "Prôner",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'mitigation' en français ?",
            option1: "Diminution",
            option2: "Atténuation",
            option3: "Amélioration",
            option4: "Ralentissement",
            correctOption: "Atténuation",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'accountability' en français ?",
            option1: "Responsabilité",
            option2: "Fiabilité",
            option3: "Obligation",
            option4: "Crédibilité",
            correctOption: "Responsabilité",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'comprehensive' en français ?",
            option1: "Complet",
            option2: "Élevé",
            option3: "Suffisant",
            option4: "Complexe",
            correctOption: "Complet",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'substantial' en français ?",
            option1: "Minime",
            option2: "Substantiel",
            option3: "Intangible",
            option4: "Important",
            correctOption: "Substantiel",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'to hinder' en français ?",
            option1: "Encourager",
            option2: "Empêcher",
            option3: "Atténuer",
            option4: "Favoriser",
            correctOption: "Empêcher",
            categ: "Vocab",
            NV: "C1"
        },
        {
            question: "Comment dit-on 'nuance' en français ?",
            option1: "Détail",
            option2: "Nuance",
            option3: "Contraste",
            option4: "Éclat",
            correctOption: "Nuance",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Comment dit-on 'to epitomize' en français ?",
            option1: "Symboliser",
            option2: "Représenter",
            option3: "Souligner",
            option4: "Distinguer",
            correctOption: "Symboliser",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Comment dit-on 'pervasive' en français ?",
            option1: "Omniprésent",
            option2: "Généralisé",
            option3: "Commun",
            option4: "Révélateur",
            correctOption: "Omniprésent",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Comment dit-on 'to underscore' en français ?",
            option1: "Omettre",
            option2: "Énoncer",
            option3: "Souligner",
            option4: "Éclairer",
            correctOption: "Souligner",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Comment dit-on 'ubiquitous' en français ?",
            option1: "Rare",
            option2: "Fréquent",
            option3: "Ubiquitaire",
            option4: "Apparent",
            correctOption: "Ubiquitaire",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Comment dit-on 'to juxtapose' en français ?",
            option1: "Aligner",
            option2: "Comparer",
            option3: "Juxtaposer",
            option4: "Contraster",
            correctOption: "Juxtaposer",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Comment dit-on 'idiosyncrasy' en français ?",
            option1: "Peculiarité",
            option2: "Originalité",
            option3: "Idiosyncrasie",
            option4: "Spécificité",
            correctOption: "Idiosyncrasie",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Comment dit-on 'quintessential' en français ?",
            option1: "Principal",
            option2: "Typique",
            option3: "Parfait",
            option4: "Quintessentiel",
            correctOption: "Quintessentiel",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Comment dit-on 'elaborate' en français ?",
            option1: "Complexe",
            option2: "Élaboré",
            option3: "Subtil",
            option4: "Détaillé",
            correctOption: "Élaboré",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Comment dit-on 'to scrutinize' en français ?",
            option1: "Examiner",
            option2: "Observer",
            option3: "Analyser",
            option4: "Évaluer",
            correctOption: "Examiner",
            categ: "Vocab",
            NV: "C2"
        },
        {
            question: "Quel est le mot pour désigner une boisson chaude que l'on boit le matin ?",
            option1: "Jus",
            option2: "Café",
            option3: "Lait",
            option4: "Soda",
            correctOption: "Café",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Quelle phrase décrit une action du matin ?",
            option1: "Je vais dormir.",
            option2: "Je me brosse les dents.",
            option3: "Je regarde la télévision tard.",
            option4: "Je dîne avec ma famille.",
            correctOption: "Je me brosse les dents.",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Quelle est l'heure du déjeuner en France ?",
            option1: "7h",
            option2: "12h",
            option3: "18h",
            option4: "20h",
            correctOption: "12h",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'I am happy' en français ?",
            option1: "Je suis triste.",
            option2: "Je suis heureux.",
            option3: "Je suis fatigué.",
            option4: "Je suis en colère.",
            correctOption: "Je suis heureux.",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Quel est le mot pour 'cat' en français ?",
            option1: "Chien",
            option2: "Chat",
            option3: "Oiseau",
            option4: "Poisson",
            correctOption: "Chat",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Quelle phrase décrit une personne qui court ?",
            option1: "Elle danse.",
            option2: "Elle lit un livre.",
            option3: "Elle court dans le parc.",
            option4: "Elle dort.",
            correctOption: "Elle court dans le parc.",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Quel est le mot pour désigner un légume vert ?",
            option1: "Pomme",
            option2: "Salade",
            option3: "Pain",
            option4: "Poulet",
            correctOption: "Salade",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'Goodbye' en français ?",
            option1: "Bonjour",
            option2: "Salut",
            option3: "Au revoir",
            option4: "Merci",
            correctOption: "Au revoir",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Comment dit-on 'book' en français ?",
            option1: "Stylo",
            option2: "Livre",
            option3: "Chaise",
            option4: "Table",
            correctOption: "Livre",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Quelle phrase décrit le fait de manger ?",
            option1: "Je bois un café.",
            option2: "Je lis un journal.",
            option3: "Je mange une pomme.",
            option4: "Je parle au téléphone.",
            correctOption: "Je mange une pomme.",
            categ: "Comp",
            NV: "A1"
        },
        {
            question: "Quelle phrase correspond à une action que l'on fait après le travail ?",
            option1: "Je me réveille.",
            option2: "Je fais la sieste.",
            option3: "Je rentre à la maison.",
            option4: "Je fais mes devoirs du matin.",
            correctOption: "Je rentre à la maison.",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'I like to play sports' en français ?",
            option1: "Je déteste faire du sport.",
            option2: "J'aime jouer au sport.",
            option3: "Je regarde le sport.",
            option4: "Je marche beaucoup.",
            correctOption: "J'aime jouer au sport.",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Quelle phrase décrit un jour de la semaine ?",
            option1: "C'est un mois.",
            option2: "C'est une année.",
            option3: "C'est lundi.",
            option4: "C'est un jour férié.",
            correctOption: "C'est lundi.",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'I am going to the library' en français ?",
            option1: "Je vais au parc.",
            option2: "Je vais à l'école.",
            option3: "Je vais à la bibliothèque.",
            option4: "Je vais au magasin.",
            correctOption: "Je vais à la bibliothèque.",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Quelle phrase décrit quelqu'un qui voyage ?",
            option1: "Il marche dans la rue.",
            option2: "Il prend le train.",
            option3: "Il lit un livre.",
            option4: "Il écrit un e-mail.",
            correctOption: "Il prend le train.",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Quelle phrase décrit une activité du week-end ?",
            option1: "Je travaille au bureau.",
            option2: "Je fais la lessive.",
            option3: "Je vais au cinéma.",
            option4: "Je fais mes devoirs scolaires.",
            correctOption: "Je vais au cinéma.",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Quel est le mot pour décrire une maison de vacances ?",
            option1: "Cabine",
            option2: "Appartement",
            option3: "Chalet",
            option4: "Studio",
            correctOption: "Chalet",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'to prepare dinner' en français ?",
            option1: "Manger le dîner",
            option2: "Préparer le dîner",
            option3: "Acheter le dîner",
            option4: "Servir le dîner",
            correctOption: "Préparer le dîner",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Quelle phrase correspond à une action dans un restaurant ?",
            option1: "Je cuisine des pâtes.",
            option2: "Je commande un plat.",
            option3: "Je joue au tennis.",
            option4: "Je lis un journal.",
            correctOption: "Je commande un plat.",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Comment dit-on 'The weather is nice' en français ?",
            option1: "Il fait froid.",
            option2: "Il fait beau.",
            option3: "Il pleut.",
            option4: "Il neige.",
            correctOption: "Il fait beau.",
            categ: "Comp",
            NV: "A2"
        },
        {
            question: "Quel est le mot pour décrire une personne qui aime aider les autres ?",
            option1: "Indifférent",
            option2: "Généreux",
            option3: "Solitiare",
            option4: "Méfiant",
            correctOption: "Généreux",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Quel est le problème de la personne dans ce texte : 'Je suis fatigué, j'ai beaucoup de travail et je n'ai pas de temps pour moi.'",
            option1: "Elle est malade.",
            option2: "Elle a trop de travail.",
            option3: "Elle s'ennuie.",
            option4: "Elle est triste.",
            correctOption: "Elle a trop de travail.",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Comment dire 'I need help' en français ?",
            option1: "Je veux de l'aide.",
            option2: "J'ai besoin d'aide.",
            option3: "Je peux aider.",
            option4: "Je veux comprendre.",
            correctOption: "J'ai besoin d'aide.",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Quel mot est un synonyme de 'heureux' ?",
            option1: "Content",
            option2: "Fatigué",
            option3: "Sombre",
            option4: "Endormi",
            correctOption: "Content",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Quel est le message principal de ce texte : 'Il est important de prendre soin de soi, de bien manger et de faire de l'exercice.'",
            option1: "Il faut faire attention à sa santé.",
            option2: "Il est essentiel d'étudier.",
            option3: "Il faut voyager pour se détendre.",
            option4: "Il faut manger au restaurant.",
            correctOption: "Il faut faire attention à sa santé.",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Quelle phrase décrit une personne qui aime voyager ?",
            option1: "Elle préfère rester chez elle.",
            option2: "Elle aime découvrir de nouveaux endroits.",
            option3: "Elle n'aime pas parler aux gens.",
            option4: "Elle aime lire des livres.",
            correctOption: "Elle aime découvrir de nouveaux endroits.",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Que fait la personne dans ce texte : 'Je me lève tôt tous les jours et je vais à l'école.'",
            option1: "Elle fait du sport.",
            option2: "Elle travaille.",
            option3: "Elle va à l'école.",
            option4: "Elle se repose.",
            correctOption: "Elle va à l'école.",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Que peut-on voir dans une forêt ?",
            option1: "Des poissons",
            option2: "Des arbres et des animaux",
            option3: "Des immeubles",
            option4: "Des voitures",
            correctOption: "Des arbres et des animaux",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Pourquoi est-ce que la personne a l'air stressée dans ce texte : 'Je dois rendre mon travail demain, mais je n'ai pas encore commencé.'",
            option1: "Elle est excitée.",
            option2: "Elle est en retard.",
            option3: "Elle est contente.",
            option4: "Elle est détendue.",
            correctOption: "Elle est en retard.",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Comment dit-on 'to travel abroad' en français ?",
            option1: "Voyager à l'étranger",
            option2: "Rester à la maison",
            option3: "Étudier en ligne",
            option4: "Travailler ici",
            correctOption: "Voyager à l'étranger",
            categ: "Comp",
            NV: "B1"
        },
        {
            question: "Quel est le problème que décrit cette personne : 'Je suis très occupé, je n'ai pas le temps de voir mes amis ni de sortir.'",
            option1: "Il est fatigué.",
            option2: "Il manque de temps pour ses loisirs.",
            option3: "Il veut changer de travail.",
            option4: "Il préfère rester chez lui.",
            correctOption: "Il manque de temps pour ses loisirs.",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Quel est l'objectif principal de l'article ?",
            option1: "Expliquer les dangers de l'alcool.",
            option2: "Promouvoir un mode de vie sain.",
            option3: "Donner des conseils financiers.",
            option4: "Parler de vacances.",
            correctOption: "Promouvoir un mode de vie sain.",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Que fait la personne dans ce texte : 'Elle parle de ses projets professionnels pour l'année à venir et de ses objectifs.'",
            option1: "Elle se repose.",
            option2: "Elle parle de ses loisirs.",
            option3: "Elle discute de ses objectifs professionnels.",
            option4: "Elle parle de ses vacances.",
            correctOption: "Elle discute de ses objectifs professionnels.",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Quel est le message de ce texte ? 'Le changement est difficile, mais il peut apporter des résultats positifs si l'on persévère.'",
            option1: "Les changements ne sont pas importants.",
            option2: "Le changement peut être bénéfique à long terme.",
            option3: "Il faut toujours éviter le changement.",
            option4: "Les changements sont toujours faciles.",
            correctOption: "Le changement peut être bénéfique à long terme.",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Pourquoi la personne se sent-elle fière dans ce texte : 'J'ai terminé mon projet à temps, malgré les défis.'",
            option1: "Elle a réussi à respecter un délai.",
            option2: "Elle n'a pas bien travaillé.",
            option3: "Elle est fatiguée.",
            option4: "Elle a abandonné son projet.",
            correctOption: "Elle a réussi à respecter un délai.",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Quel type de texte est celui-ci : 'Un article de blog sur les voyages' ?",
            option1: "Un texte scientifique",
            option2: "Un texte informatif",
            option3: "Un texte narratif",
            option4: "Un texte argumentatif",
            correctOption: "Un texte informatif",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Que dit la personne dans ce texte : 'J'ai décidé de changer de carrière et de commencer à travailler dans le secteur de la santé.'",
            option1: "Elle change de travail.",
            option2: "Elle arrête de travailler.",
            option3: "Elle part à la retraite.",
            option4: "Elle change de pays.",
            correctOption: "Elle change de travail.",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Quel est le problème avec cette idée : 'Ils veulent investir tout leur argent dans une seule entreprise.'",
            option1: "Ils prennent un gros risque.",
            option2: "Ils sont trop prudents.",
            option3: "Ils ont trop d'argent.",
            option4: "Ils investissent dans des actions sûres.",
            correctOption: "Ils prennent un gros risque.",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Que doit-on faire si l'on veut s'améliorer, selon ce texte : 'Il faut pratiquer régulièrement et ne pas avoir peur de faire des erreurs.'",
            option1: "Prendre des pauses.",
            option2: "Éviter les erreurs.",
            option3: "Pratiquer fréquemment et accepter les erreurs.",
            option4: "Arrêter de pratiquer.",
            correctOption: "Pratiquer fréquemment et accepter les erreurs.",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Que suggère le texte : 'Il est préférable de se préparer à l'avance pour éviter le stress le jour de l'examen.'",
            option1: "Ne rien préparer.",
            option2: "Réviser avant l'examen.",
            option3: "Arriver tard à l'examen.",
            option4: "Faire une pause pendant l'examen.",
            correctOption: "Réviser avant l'examen.",
            categ: "Comp",
            NV: "B2"
        },
        {
            question: "Quel est l'objectif principal de ce texte : 'Le texte décrit les impacts positifs et négatifs du développement technologique sur la société.'",
            option1: "Critiquer les nouvelles technologies.",
            option2: "Présenter les avantages du progrès technologique.",
            option3: "Analyser les impacts du développement technologique.",
            option4: "Décrire l'histoire des nouvelles technologies.",
            correctOption: "Analyser les impacts du développement technologique.",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Quel est l'avis de l'auteur sur la situation dans ce texte : 'Bien que le processus soit difficile, l'auteur croit qu'il est possible de surmonter les obstacles grâce à la persévérance.'",
            option1: "L'auteur est pessimiste.",
            option2: "L'auteur croit que la situation est irréversible.",
            option3: "L'auteur est optimiste et insiste sur l'importance de la persévérance.",
            option4: "L'auteur est neutre sur la situation.",
            correctOption: "L'auteur est optimiste et insiste sur l'importance de la persévérance.",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Quel est le principal argument avancé dans ce texte : 'La collaboration est essentielle pour résoudre des problèmes complexes dans un environnement professionnel.'",
            option1: "Travailler seul est plus efficace.",
            option2: "La collaboration est clé pour la réussite professionnelle.",
            option3: "Les problèmes complexes sont faciles à résoudre.",
            option4: "L'environnement professionnel ne nécessite pas de collaboration.",
            correctOption: "La collaboration est clé pour la réussite professionnelle.",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Quel est l'effet du stress sur le corps selon ce texte : 'Le stress peut affaiblir le système immunitaire et rendre plus vulnérable aux maladies.'",
            option1: "Le stress rend les gens plus heureux.",
            option2: "Le stress renforce le système immunitaire.",
            option3: "Le stress affaiblit le système immunitaire.",
            option4: "Le stress n'a aucun impact sur la santé.",
            correctOption: "Le stress affaiblit le système immunitaire.",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Quel est le message central de l'article ? 'L'importance de l'éducation à l'ère numérique et l'impact des nouvelles technologies sur l'enseignement.'",
            option1: "Les technologies nuisent à l'éducation.",
            option2: "Les technologies améliorent l'éducation.",
            option3: "L'éducation est indépendante des technologies.",
            option4: "L'éducation traditionnelle est meilleure que l'éducation numérique.",
            correctOption: "Les technologies améliorent l'éducation.",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Comment peut-on résoudre les problèmes liés à l'environnement d'après le texte : 'Il faut adopter des habitudes de consommation responsables et encourager les initiatives écologiques.'",
            option1: "En continuant comme avant.",
            option2: "En augmentant la production industrielle.",
            option3: "En prenant des mesures écologiques et en changeant nos habitudes.",
            option4: "En négligeant les problèmes écologiques.",
            correctOption: "En prenant des mesures écologiques et en changeant nos habitudes.",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Quel est le ton de l'auteur dans ce texte : 'Il est essentiel d'encourager la diversité dans le lieu de travail pour améliorer la créativité et l'innovation.'",
            option1: "Pessimiste",
            option2: "Optimiste",
            option3: "Neutre",
            option4: "Inquiet",
            correctOption: "Optimiste",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Que propose l'article pour gérer le stress au travail ?",
            option1: "Prendre des pauses régulières et pratiquer la pleine conscience.",
            option2: "Travailler sans pause.",
            option3: "Éviter les réunions.",
            option4: "Doubler la charge de travail.",
            correctOption: "Prendre des pauses régulières et pratiquer la pleine conscience.",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Pourquoi l'auteur parle-t-il des réseaux sociaux dans ce texte ?",
            option1: "Pour montrer qu'ils ont un impact négatif sur la société.",
            option2: "Pour expliquer qu'ils sont inutiles.",
            option3: "Pour discuter de leur rôle dans le développement professionnel.",
            option4: "Pour critiquer la technologie.",
            correctOption: "Pour discuter de leur rôle dans le développement professionnel.",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Quel est l'argument avancé concernant les technologies éducatives ?",
            option1: "Elles rendent l'apprentissage moins interactif.",
            option2: "Elles permettent un apprentissage plus personnalisé et accessible.",
            option3: "Elles sont inutiles dans l'éducation.",
            option4: "Elles sont trop coûteuses pour les écoles.",
            correctOption: "Elles permettent un apprentissage plus personnalisé et accessible.",
            categ: "Comp",
            NV: "C1"
        },
        {
            question: "Quel est l'impact de l'intelligence artificielle sur les métiers créatifs d'après cet article ?",
            option1: "Elle réduit la créativité humaine.",
            option2: "Elle remplace totalement les métiers créatifs.",
            option3: "Elle stimule la créativité en augmentant les possibilités.",
            option4: "Elle n'a aucun impact sur ces métiers.",
            correctOption: "Elle stimule la créativité en augmentant les possibilités.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "Quelles sont les conséquences de l'automatisation sur le marché du travail dans ce texte ?",
            option1: "L'automatisation crée plus de jobs que ce qu'elle remplace.",
            option2: "L'automatisation menace l'emploi dans certains secteurs tout en en créant dans d'autres.",
            option3: "L'automatisation n'a aucun effet sur le marché du travail.",
            option4: "L'automatisation mène à la disparition de toutes les industries.",
            correctOption: "L'automatisation menace l'emploi dans certains secteurs tout en en créant dans d'autres.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "Pourquoi l'auteur critique-t-il la société de consommation dans ce texte : 'Les tendances modernes poussent à la consommation excessive et au gaspillage, ce qui nuit à l'environnement et à la société.'",
            option1: "Parce que la société de consommation favorise la durabilité.",
            option2: "Parce qu'elle mène à un déséquilibre écologique et social.",
            option3: "Parce qu'elle stimule la croissance économique.",
            option4: "Parce qu'elle est nécessaire à la progression de la société.",
            correctOption: "Parce qu'elle mène à un déséquilibre écologique et social.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "Quel est le principal défi de la société moderne selon ce texte : 'La rapidité des changements technologiques et leur impact sur la structure sociale.'",
            option1: "L'incapacité à intégrer les technologies dans la société.",
            option2: "Le déclin des technologies anciennes.",
            option3: "Les inégalités créées par la rapidité de l'innovation technologique.",
            option4: "La lente adoption des nouvelles technologies.",
            correctOption: "Les inégalités créées par la rapidité de l'innovation technologique.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "Quel est le propos de l'auteur dans ce passage : 'La liberté d'expression doit être protégée, mais elle n'est pas sans limites, notamment lorsqu'elle porte atteinte à la dignité humaine.'",
            option1: "L'auteur soutient une liberté d'expression absolue.",
            option2: "L'auteur considère que la liberté d'expression doit être encadrée par des règles.",
            option3: "L'auteur rejette toute forme de censure.",
            option4: "L'auteur minimise l'importance de la liberté d'expression.",
            correctOption: "L'auteur considère que la liberté d'expression doit être encadrée par des règles.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "Quelle est la position de l'auteur sur le changement climatique ? 'Il est urgent d'agir pour limiter les effets du changement climatique avant qu'il ne soit trop tard.'",
            option1: "L'auteur doute de la réalité du changement climatique.",
            option2: "L'auteur est sceptique quant à l'impact des actions humaines.",
            option3: "L'auteur appelle à une action immédiate pour limiter le changement climatique.",
            option4: "L'auteur estime que les efforts actuels sont suffisants.",
            correctOption: "L'auteur appelle à une action immédiate pour limiter le changement climatique.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "Dans cet article, pourquoi l'auteur parle-t-il de la révolution numérique ?",
            option1: "Pour démontrer que la révolution numérique a échoué.",
            option2: "Pour expliquer son impact majeur sur tous les aspects de la société.",
            option3: "Pour minimiser son importance.",
            option4: "Pour critiquer la lente adoption des nouvelles technologies.",
            correctOption: "Pour expliquer son impact majeur sur tous les aspects de la société.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "Quel est l'argument avancé par l'auteur concernant la durabilité dans la production industrielle ? 'Les entreprises doivent adopter des modèles de production durables pour répondre aux défis environnementaux du XXIe siècle.'",
            option1: "Les modèles durables sont coûteux et inefficaces.",
            option2: "Les entreprises doivent se concentrer sur la réduction des coûts à court terme.",
            option3: "Les modèles durables sont essentiels pour assurer la pérennité des entreprises et préserver l'environnement.",
            option4: "Les entreprises doivent éviter d'adopter des pratiques durables pour ne pas nuire à leur rentabilité.",
            correctOption: "Les modèles durables sont essentiels pour assurer la pérennité des entreprises et préserver l'environnement.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "Que suggère l'auteur à propos des inégalités sociales ? 'Les inégalités sociales peuvent être atténuées par une meilleure redistribution des richesses et des réformes économiques profondes.'",
            option1: "Les inégalités sociales sont irréversibles.",
            option2: "Les inégalités sociales ne sont pas un problème majeur.",
            option3: "Une redistribution des richesses et des réformes peuvent réduire les inégalités sociales.",
            option4: "Les inégalités sociales doivent être ignorées pour le bien de l'économie.",
            correctOption: "Une redistribution des richesses et des réformes peuvent réduire les inégalités sociales.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "Quelle est la conclusion principale de cet article : 'L'innovation technologique, bien qu'elle présente des risques, offre des possibilités infinies pour améliorer la qualité de vie, à condition d'être utilisée de manière responsable.'",
            option1: "L'innovation technologique est une menace pour la société.",
            option2: "L'innovation technologique doit être ignorée.",
            option3: "L'innovation technologique peut être bénéfique si elle est utilisée de manière éthique.",
            option4: "L'innovation technologique ne présente aucun risque.",
            correctOption: "L'innovation technologique peut être bénéfique si elle est utilisée de manière éthique.",
            categ: "Comp",
            NV: "C2"
        },
        {
            question: "____ chat est mignon.",
            categ: "Grammaire",
            NV: "A1",
            option1: "Une",
            option2: "Un",
            option3: "Le",
            option4: "La",
            correctOption: "Le",
    },
    {
        question: "Nous ____ contents.",
        categ: "Grammaire",
        NV: "A1",
        option1: "est",
        option2: "sommes",
        option3: "avez",
        option4: "sont",
        correctOption: "sommes"
    },
    {
        question: "Ils ____ une voiture.",
        categ: "Grammaire",
        NV: "A1",

        option1: "avons",
        option2: "avez",
        option3: "ont",
        option4: "est",
        correctOption: "ont"

    },
    {
        question: "Elle ____ (habiter) à Paris",
        categ: "Grammaire",
        NV: "A1",

        option1: "habites",
        option2: " habite",
        option3: " habitons",
        option4: "habit",
        correctOption: "habite",

    },
    {
        question: "Marie est gentille. ____ est toujours souriante",
        categ: "Grammaire",
        NV: "A1",

        option1: " Il",
        option2: "Elle",
        option3: "Tu",
        option4: "il",
        correctOption: "Elle",

    },
    {
        question: "C'est la maison de moi. C'est ____ maison.",
        categ: "Grammaire",
        NV: "A1",

        option1: "mon",
        option2: "ma",
        option3: "son",
        option4: "mes",
        correctOption: "ma"

    },
    {
        question: "Sélectionnez la phrase correcte",
        categ: "Grammaire",
        NV: "A1",

        option1: "Nous avons un chien marron.",
        option2: "Nous as un chien marron.",
        option3: " Nous a un chien marron.",
        option4: "Nous avez un chein marron",
        correctOption: "Nous avons un chien marron."

    },
    {
        question: "Nous allons ____ école tous les jours.",
        categ: "Grammaire",
        NV: "A1",

        option1: "au",
        option2: "à",
        option3: " en",
        option4: "dans",
        correctOption: "à"

    },
    {
        question: "Paul et moi avons un vélo. C'est ____ vélo.",
        categ: "Grammaire",
        NV: "A1",

        option1: "notre",
        option2: "votre",
        option3: " leur",
        option4: "vos",
        correctOption: "notre"

    },
    {
        question: "Elle aime la musique. (Exprimez la négation)",
        categ: "Grammaire",
        NV: "A1",

        option1: "Elle non aime la musique. ",
        option2: "Elle ne aime pas la musique.",
        option3: " Elle n'aime pas la musique.",
        option4: "Elle aime pas la musique.",
        correctOption: "Elle n'aime pas la musique.."

    },
    //========****A2****========//
    {
        question: "Nous avons ____ nouveaux voisins.",
        categ: "Grammaire",
        NV: "A2",
        option1: "de",
        option2: "des",
        option3: "du",
        option4: "les",
        correctOption: "de"
    },
    {
        question: "Ils ____ (partir) en vacances demain.",
        categ: "Grammaire",
        NV: "A2",
        option1: "part",
        option2: "partons",
        option3: "partent",
        option4: "partez",
        correctOption: "partent"
    },
    {
        question: "Comment ____ -tu la France ?",
        categ: "Grammaire",
        NV: "A2",
        option1: "trouves",
        option2: "trouve",
        option3: "trouvez",
        option4: "trouvons",
        correctOption: "trouves"
    },
    {
        question: "C'est une maison ____ j'ai toujours rêvé.",
        categ: "Grammaire",
        NV: "A2",
        option1: "dont",
        option2: "où",
        option3: "qui",
        option4: "que",
        correctOption: "dont"
    },
    {
        question: "Elle est ____ que sa sœur.",
        categ: "Grammaire",
        NV: "A2",
        option1: "plus grand",
        option2: "plus grande",
        option3: "plus grands",
        option4: "plus grandes",
        correctOption: "plus grande"
    },
    {
        question: "Ils habitent ____ une grande ville.",
        categ: "Grammaire",
        NV: "A",
        option1: "dans",
        option2: "en",
        option3: "à",
        option4: "chez",
        correctOption: "dans"
    },
    {
        question: "Il n'y a ____ personne ici.",
        categ: "Grammaire",
        NV: "A2",
        option1: "pas",
        option2: "aucun",
        option3: "ne",
        option4: "pas de",
        correctOption: "pas"
    },
    {
        question: "Ils ____ (finir) leur travail avant midi.",
        categ: "Grammaire",
        NV: "A2",
        option1: "finissent",
        option2: "finir",
        option3: "finissons",
        option4: "finit",
        correctOption: "finissent"
    },
    {
        question: "____ tu veux venir au cinéma ce soir ?",
        categ: "Grammaire",
        NV: "A2",
        option1: "Est-ce que",
        option2: "Quel",
        option3: "Où",
        option4: "Comment",
        correctOption: "Est-ce que"
    },
    {
        question: "C’est la personne ____ je parlais.",
        categ: "Grammaire",
        NV: "A2",
        option1: "à qui",
        option2: "où",
        option3: "dont",
        option4: "avec",
        correctOption: "dont"
    },

    //========****B1****=======//
    
        {
        question: "Il est parti sans ____ au revoir.",
        categ: "Grammaire",
        NV: "B1",
        option1: "dire",
        option2: "dira",
        option3: "dit",
        option4: "disaient",
        correctOption: "dire"
    },
    {
        question: "C'est l'auteur ____ j'admire les œuvres.",
        categ: "Grammaire",
        NV: "B1",
        option1: "dont",
        option2: "que",
        option3: "qui",
        option4: "lequel",
        correctOption: "dont"
    },
    {
        question: "Si elle ____ plus tôt, elle aurait pu nous aider.",
        categ: "Grammaire",
        NV: "B1",
        option1: "vient",
        option2: "venait",
        option3: "était venue",
        option4: "serait venue",
        correctOption: "était venue"
    },
    {
        question: "Nous devons étudier pour ____ bien préparer aux examens.",
        categ: "Grammaire",
        NV: "B1",
        option1: "nous",
        option2: "lui",
        option3: "les",
        option4: "y",
        correctOption: "nous"
    },
    {
        question: "Ils ____ (devoir) finir le projet avant la fin du mois.",
        categ: "Grammaire",
        NV: "B1",
        option1: "devraient",
        option2: "doivent",
        option3: "devront",
        option4: "dû",
        correctOption: "doivent"
    },
    {
        question: "Il parle si doucement que personne ne peut l’____.",
        categ: "Grammaire",
        NV: "B1",
        option1: "entendre",
        option2: "écouter",
        option3: "entendu",
        option4: "entends",
        correctOption: "entendre"
    },
    {
        question: "Je ne savais pas qu'elle ____ (pouvoir) venir ce soir.",
        categ: "Grammaire",
        NV: "B1",
        option1: "pourrait",
        option2: "peut",
        option3: "a pu",
        option4: "pouvait",
        correctOption: "pouvait"
    },
    {
        question: "Il est important que tu ____ (faire) attention en classe.",
        categ: "Grammaire",
        NV: "B1",
        option1: "fait",
        option2: "fasses",
        option3: "fais",
        option4: "feras",
        correctOption: "fasses"
    },
    {
        question: "Je ne peux pas venir, ____ j'aimerais beaucoup.",
        categ: "Grammaire",
        NV: "B1",
        option1: "enfin",
        option2: "car",
        option3: "même si",
        option4: "sauf",
        correctOption: "même si"
    },
    {
        question: "Il m'a prêté un livre ____ la couverture est rouge.",
        categ: "Grammaire",
        NV: "B1",
        option1: "dont",
        option2: "qui",
        option3: "que",
        option4: "où",
        correctOption: "dont"
    },
    //=========****B2****============//
    
        {
        question: "Bien qu'il ____ (savoir) la vérité, il préfère se taire.",
        categ: "Grammaire",
        NV: "B2",
        option1: "sache",
        option2: "sait",
        option3: "savait",
        option4: "saura",
        correctOption: "sache"
    },
    {
        question: "Il est parti sans que nous ____ (avoir) le temps de le saluer.",
        categ: "Grammaire",
        NV: "B2",
        option1: "avons",
        option2: "ayons",
        option3: "avions",
        option4: "aurons",
        correctOption: "ayons"
    },
    {
        question: "C'est l'entreprise ____ je vous ai parlé hier.",
        categ: "Grammaire",
        NV: "B2",
        option1: "dont",
        option2: "où",
        option3: "que",
        option4: "laquelle",
        correctOption: "dont"
    },
    {
        question: "Je chercherai quelqu'un qui ____ (pouvoir) m'aider dans ce projet.",
        categ: "Grammaire",
        NV: "B2",
        option1: "pouvait",
        option2: "peut",
        option3: "puisse",
        option4: "pourra",
        correctOption: "puisse"
    },
    {
        question: "Elle agit comme si elle ____ (être) la patronne.",
        categ: "Grammaire",
        NV: "B2",
        option1: "est",
        option2: "sera",
        option3: "était",
        option4: "soit",
        correctOption: "était"
    },
    {
        question: "Ils se sont retrouvés dans une situation ____ ils ne pouvaient pas sortir.",
        categ: "Grammaire",
        NV: "B2",
        option1: "que",
        option2: "dont",
        option3: "où",
        option4: "laquelle",
        correctOption: "dont"
    },
    {
        question: "Je suis venu afin que vous ____ (comprendre) mieux la situation.",
        categ: "Grammaire",
        NV: "B2",
        option1: "comprenez",
        option2: "comprendrez",
        option3: "comprissiez",
        option4: "compreniez",
        correctOption: "compreniez"
    },
    {
        question: "Il regrette que nous ____ (ne pas venir) plus tôt.",
        categ: "Grammaire",
        NV: "B2",
        option1: "ne sommes pas venus",
        option2: "ne soyons pas venus",
        option3: "ne venions pas",
        option4: "ne serions pas venus",
        correctOption: "ne soyons pas venus"
    },
    {
        question: "____ qu'il m'a dit est surprenant.",
        categ: "Grammaire",
        NV: "B2",
        option1: "Ce que",
        option2: "Ce dont",
        option3: "Ce qui",
        option4: "Ce dont",
        correctOption: "Ce que"
    },
    {
        question: "À moins qu'ils ____ (changer) d'avis, nous n'aurons pas de réponse.",
        categ: "Grammaire",
        NV: "B2",
        option1: "changent",
        option2: "changent pas",
        option3: "changeons",
        option4: "changeront",
        correctOption: "changent"
    },

//============*****C1*****==========//
            {
            question: "Il est dommage que tu ____ (ne pas comprendre) cette explication.",
            categ: "Grammaire",
            NV: "C1",
            option1: "ne comprends",
            option2: "ne comprennes",
            option3: "ne comprenne",
            option4: "ne comprenais",
            correctOption: "ne comprennes"
        },
        {
            question: "Si j'avais su qu'il ____ (venir), j'aurais préparé quelque chose.",
            categ: "Grammaire",
            NV: "C1",
            option1: "viendra",
            option2: "soit venu",
            option3: "vienne",
            option4: "serait venu",
            correctOption: "soit venu"
        },
        {
            question: "Je doute qu'il ____ (pouvoir) réussir cet examen sans révision.",
            categ: "Grammaire",
            NV: "C1",
            option1: "puisse",
            option2: "peut",
            option3: "pourra",
            option4: "puise",
            correctOption: "puisse"
        },
        {
            question: "C'est une personne avec ____ je travaille depuis des années.",
            categ: "Grammaire",
            NV: "C1",
            option1: "laquelle",
            option2: "qui",
            option3: "que",
            option4: "dont",
            correctOption: "laquelle"
        },
        {
            question: "Je n'ai pas bien compris pourquoi elle ____ (partir) si soudainement.",
            categ: "Grammaire",
            NV: "C1",
            option1: "part",
            option2: "partait",
            option3: "est partie",
            option4: "soit partie",
            correctOption: "soit partie"
        },
        {
            question: "Il est essentiel que vous ____ (être) présents à la réunion de demain.",
            categ: "Grammaire",
            NV: "C1",
            option1: "soyez",
            option2: "êtes",
            option3: "seriez",
            option4: "seront",
            correctOption: "soyez"
        },
        {
            question: "Elle ne croit pas qu'ils ____ (avoir) suffisamment d'arguments.",
            categ: "Grammaire",
            NV: "C1",
            option1: "ont",
            option2: "aient",
            option3: "aient eu",
            option4: "avaient",
            correctOption: "aient"
        },
        {
            question: "Le film était captivant, bien que l'intrigue ____ (être) prévisible.",
            categ: "Grammaire",
            NV: "C1",
            option1: "soit",
            option2: "était",
            option3: "soit été",
            option4: "a été",
            correctOption: "soit"
        },
        {
            question: "Il ne m'a pas dit s'il ____ (venir) à la fête ce soir.",
            categ: "Grammaire",
            NV: "C1",
            option1: "viendra",
            option2: "vient",
            option3: "viendrait",
            option4: "vienne",
            correctOption: "viendrait"
        },
        {
            question: "Je n'ai pas de nouvelles de Paul, ____ il m'a promis de m'envoyer.",
            categ: "Grammaire",
            NV: "C1",
            option1: "ce dont",
            option2: "qui",
            option3: "ce que",
            option4: "dont",
            correctOption: "ce qu'"
        },
        //===========*****C2*****===========//
        {
            question: "Bien qu'il ____ (avoir) toutes les informations, il n'a rien dit.",
            categ: "Grammaire",
            NV: "C2",
            option1: "a",
            option2: "ait",
            option3: "avait",
            option4: "aura",
            correctOption: "ait"
        },
        {
            question: "Je n'aurais jamais cru qu'il ____ (réussir) à ce point.",
            categ: "Grammaire",
            NV: "C2",
            option1: "réussira",
            option2: "réussisse",
            option3: "réussi",
            option4: "réussissait",
            correctOption: "réussisse"
        },
        {
            question: "Il se demande si nous ____ (être) prêts pour le projet.",
            categ: "Grammaire",
            NV: "C2",
            option1: "sommes",
            option2: "serons",
            option3: "étions",
            option4: "serions",
            correctOption: "sommes"
        },
        {
            question: "Je ne crois pas que cette solution ____ (convaincre) tout le monde.",
            categ: "Grammaire",
            NV: "C2",
            option1: "convainc",
            option2: "convainque",
            option3: "convaincait",
            option4: "convaincra",
            correctOption: "convainque"
        },
        {
            question: "Il s'est demandé pourquoi elle ____ (partir) sans prévenir.",
            categ: "Grammaire",
            NV: "C2",
            option1: "partait",
            option2: "soit partie",
            option3: "partie",
            option4: "partira",
            correctOption: "soit partie"
        },
        {
            question: "Quoi qu'il ____ (faire), il n'a jamais abandonné.",
            categ: "Grammaire",
            NV: "C2",
            option1: "fasse",
            option2: "faisait",
            option3: "a fait",
            option4: "fait",
            correctOption: "fasse"
        },
        {
            question: "Elle lui a demandé s'il ____ (voir) le film hier soir.",
            categ: "Grammaire",
            NV: "C2",
            option1: "a vu",
            option2: "avait vu",
            option3: "voit",
            option4: "verra",
            correctOption: "avait vu"
        },
        {
            question: "Je serais étonné que vous ____ (être) prêts avant midi.",
            categ: "Grammaire",
            NV: "C2",
            option1: "êtes",
            option2: "soyez",
            option3: "étiez",
            option4: "seriez",
            correctOption: "soyez"
        },
        {
            question: "Nous aurions préféré que vous ____ (arriver) plus tôt.",
            categ: "Grammaire",
            NV: "C2",
            option1: "arriviez",
            option2: "arrivez",
            option3: "arriviez",
            option4: "arrivâtes",
            correctOption: "arriviez"
        },
        {
            question: "Je suis convaincu qu'il ____ (accepter) l'offre.",
            categ: "Grammaire",
            NV: "C2",
            option1: "acceptera",
            option2: "accepte",
            option3: "a accepté",
            option4: "accepterait",
            correctOption: "acceptera"
        },
    ]

const local = window.localStorage;
for(let i=0;i<questions.length;i++){
    let ques = questions[i].question;
    let categ = questions[i].categ;
    let nv = questions[i].NV;
    let op1 = questions[i].option1;
    let op2 = questions[i].option2;
    let op3 = questions[i].option3;
    let op4 = questions[i].option4;
    let correctop = questions[i].correctOption;
    local.setItem(`questions${i}`, ques);
    local.setItem(`category${i}`, categ);
    local.setItem(`niveau${i}`, nv);
    local.setItem(`option1${i}`, op1);
    local.setItem(`option2${i}`, op2);
    local.setItem(`option3${i}`, op3);
    local.setItem(`opt4${i}`, op4);
    local.setItem(`correctoption${i}`, correctop);
}
console.log(questions.length);


function navigate(section) {
    document.querySelectorAll('#mainContent > div').forEach(div => div.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
    }

function displayAddQuestionForm() {
    document.getElementById('addQuestionForm').classList.toggle('hidden');
}
renderQuestions();

let question;

function saveQuestion() {
    const questionText = document.getElementById('newQuestionText').value;
    const level = document.getElementById('newQuestionLevel').value;
    const category = document.getElementById('newQuestionCategory').value;
    const correctAnswer = document.getElementById('correctAnswer').value;
    let op1 = document.querySelectorAll('#newQuestionAnswers input')[0].value;
    let op2 = document.querySelectorAll('#newQuestionAnswers input')[0].value;
    let op3 = document.querySelectorAll('#newQuestionAnswers input')[0].value;
    let op4 = document.querySelectorAll('#newQuestionAnswers input')[0].value;

    if (questionText && level && category && correctAnswer) {
        question = {
        question: questionText,
        option1: op1,
        option2: op2,
        option3: op3,
        option4: op4,
        correctOption: correctAnswer,
        categ: category,
        NV: level,
      }
      questions.push(question);
      let ques = question.question;
      let categ = question.categ;
      let nv = question.NV;
      let opt1 = question.option1;
      let opt2 = question.option2;
      let opt3 = question.option3;
      let opt4 = question.option4;
      let correctop = question.correctOption;
      local.setItem(`questions${questions.length}`, ques);
      local.setItem(`category${questions.length}`, categ);
      local.setItem(`niveau${questions.length}`, nv);
      local.setItem(`option1${questions.length}`, opt1);
      local.setItem(`option2${questions.length}`, opt2);
      local.setItem(`option3${questions.length}`, opt3);
      local.setItem(`opt4${questions.length}`, opt4);
      local.setItem(`correctoption${questions.length}`, correctop);
      console.log(questions.length);
    }else {
     alert('Veuillez remplir tous les champs.');
    }
    console.log(questions[questions.length-1]);
    console.log(questions.length);
    document.getElementById('addQuestionForm').classList.add('hidden');
    renderQuestions();
};

function renderQuestions() {
    const questionsListDiv = document.getElementById('questionsList');
    questionsListDiv.innerHTML = '';

    const questionsList = [];

    const numberOfQuestions = localStorage.length / 8; 

    for (let i = 0; i < numberOfQuestions; i++) {
        const question = {
            question: localStorage.getItem(`questions${i}`),
            categ: localStorage.getItem(`category${i}`),
            NV: localStorage.getItem(`niveau${i}`),
            option1: localStorage.getItem(`option1${i}`),
            option2: localStorage.getItem(`option2${i}`),
            option3: localStorage.getItem(`option3${i}`),
            option4: localStorage.getItem(`opt4${i}`),
            correctOption: localStorage.getItem(`correctoption${i}`)
        };
        questionsList.push(question);
    }

    questionsList.forEach((question, index) => {
        const questionHtml = `
            <div class="p-4 border mb-4 rounded-lg shadow-md">
                <p class="text-lg font-bold">${question.NV} - ${question.categ}: ${question.question}</p>
                <button onclick="deleteQuestion(${index})" class="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">Supprimer</button>
                <button onclick="editQuestion(${index})" class="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600">modify</button>
                <div id="questionInfo${index}" class="hidden p-3 mt-3 border rounded-lg bg-gray-100">
                    <p><strong>Option 1:</strong> ${question.option1}</p>
                    <input type="text" placeholder="your modification">
                    <p><strong>Option 2:</strong> ${question.option2}</p>
                    <input type="text" placeholder="your modification">
                    <p><strong>Option 3:</strong> ${question.option3}</p>
                    <input type="text" placeholder="your modification">
                    <p><strong>Option 4:</strong> ${question.option4}</p>
                    <input type="text" placeholder="your modification">
                    <p><strong>Correct Option:</strong> ${question.correctOption}</p>
                    <input type="text" placeholder="your modification">
                    <br><button>submit<button>
                </div>
            </div>
        `;
        questionsListDiv.innerHTML += questionHtml;
    });
}

function deleteQuestion(index) {
    if (confirm(localStorage.getItem(`questions${index}`))) {
        localStorage.removeItem(`questions${index}`);
        localStorage.removeItem(`category${index}`);
        localStorage.removeItem(`niveau${index}`);
        localStorage.removeItem(`option1${index}`);
        localStorage.removeItem(`option2${index}`);
        localStorage.removeItem(`option3${index}`);
        localStorage.removeItem(`opt4${index}`);
        localStorage.removeItem(`correctoption${index}`);
        renderQuestions();
    }
}

function editQuestion(index) {
    const questionInfoDiv = document.getElementById(`questionInfo${index}`);
    questionInfoDiv.classList.toggle('hidden');
}

let x = document.getElementById("x");

let y = 0;

function somme(){
    a1= 4;
    x.innerText = y; 
}


