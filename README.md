# Exercices de validation de données avec Zod et Hono

## Exercice 1 : Validation basique d'un utilisateur

Créez un endpoint POST `/users` qui permet d'enregistrer un nouvel utilisateur. 

### Exigences :
- Validez les champs suivants :
  - username : chaîne de caractères entre 3 et 20 caractères
  - email : format email valide
  - age : nombre entier entre 18 et 120 ans
- Implémentez la gestion des erreurs de validation
- Retournez une réponse formatée avec :
  - Code 201 et les données validées en cas de succès
  - Code 400 et les erreurs de validation en cas d'échec

### Exemple de payload valide :
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "age": 25
}
```

## Exercice 2 : Validation avec relations

Créez un endpoint POST `/posts` qui permet de créer un article avec ses tags associés.

### Exigences :
- Validez un article avec les champs suivants :
  - title : chaîne entre 5 et 100 caractères
  - content : chaîne d'au moins 10 caractères
  - publishDate : date au format ISO
  - tags : tableau d'objets tag
- Chaque tag doit avoir :
  - name : chaîne entre 2 et 15 caractères
  - color : code couleur hexadécimal valide (ex: "#FF5733")
- Le tableau de tags doit contenir entre 1 et 5 éléments
- Gérez les erreurs de validation

### Exemple de payload valide :
```json
{
  "title": "Mon premier article",
  "content": "Contenu de l'article...",
  "tags": [
    { "name": "tech", "color": "#FF5733" },
    { "name": "web", "color": "#33FF57" }
  ],
  "publishDate": "2024-12-13T12:00:00Z"
}
```

## Exercice 3 : Validation avancée avec union types

Créez un endpoint POST `/events` capable de valider différents types d'événements (système et utilisateur).

### Exigences :
- Créez un schéma de base pour tous les événements avec :
  - id : format UUID
  - timestamp : date ISO
- Validez deux types d'événements :
  1. Événements utilisateur :
     - type : "user"
     - action : enum ("login", "logout", "register")
     - userId : chaîne
  2. Événements système :
     - type : "system"
     - severity : enum ("info", "warning", "error")
     - message : chaîne
- Utilisez un discriminated union basé sur le champ "type"
- Ajoutez une transformation qui enrichit l'événement avec un champ "processedAt"

### Exemples de payloads valides :
```json
// Événement utilisateur
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "timestamp": "2024-12-13T12:00:00Z",
  "type": "user",
  "action": "login",
  "userId": "user123"
}

// Événement système
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "timestamp": "2024-12-13T12:00:00Z",
  "type": "system",
  "severity": "error",
  "message": "Database connection failed"
}
```

## Bonus pour chaque exercice :
- Ajoutez des tests unitaires pour vos validations
- Gérez les cas d'erreur avec des messages personnalisés
- Implémentez des middlewares de validation réutilisables
