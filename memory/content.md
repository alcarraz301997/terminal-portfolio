# Content Architecture

Types:
src/content/<type>/<Type>.ts

Data:
src/content/<type>/{en,es}/*.json

Loaders:
src/loader/<Type>Loader.tsx

Language:
LanguageContext
useLanguage()

Adding a page:
1. Create type
2. Create en/es JSON
3. Create loader
4. Create section
5. Register tab