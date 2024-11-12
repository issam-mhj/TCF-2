const questions = [
    [
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
        }        
    ]
]