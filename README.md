# 🏨 OTPSK — Тури та готелі

> **React + TypeScript SPA** для пошуку турів з сучасною архітектурою

---

## 📋 Опис

Мінімальна **SPA** на React + TypeScript для пошуку турів та перегляду готелів. Реалізовані сучасні патерни розробки із застосуванням архітектури **Feature Sliced Design**.

### ✨ Ключові можливості

- 🔍 **Пошук за країнами та містами** з автодоповненням
- ⚡ **Асинхронний пошук турів** з retry-механізмом та скасуванням
- 💾 **Кешування даних** готелів для оптимізації
- 🏗️ **Compound Components** для переиспользування UI
- 🎯 **TypeScript Strict Mode** для надійності типів

---

## 🛠️ Технологічний стек

| Категорія        | Технологія            | Версія        |
| ---------------- | --------------------- | ------------- |
| **Framework**    | React                 | 19.x          |
| **Language**     | TypeScript            | 5.9+ (strict) |
| **Build Tool**   | Vite                  | 7.x           |
| **Styling**      | Sass (SCSS)           | -             |
| **State**        | Zustand               | 4.x           |
| **Icons**        | React SVG             | -             |
| **Architecture** | Feature Sliced Design | -             |

---

## 📁 Структура проєкту

```
src/
├── 🚀 app/           # Entry point, routing, глобальні стилі
├── 📄 pages/         # Сторінки додатку
│   ├── main/         # Головна з пошуком та результатами
│   ├── hotel-page/   # Детальна сторінка готелю
│   └── not-found/    # 404 сторінка
├── 🧩 widgets/       # Переиспользовані віджети
│   └── search-form/  # Форма пошуку з автодоповненням
├── ⚙️ features/      # Feature-level композиції
│   └── tour/         # Інтеграція tour + hotel даних
├── 🏢 entities/      # Бізнес-логіка доменів
│   ├── country/      # Управління країнами
│   ├── geo/          # Пошук міст/локацій
│   ├── hotel/        # Дані готелів
│   └── tour/         # Пошук та дані турів
└── 🔧 shared/        # Переиспользовані ресурси
    ├── ui/           # UI-компоненти
    ├── api/          # API утиліти
    ├── utils/        # Загальні утиліти
    ├── icons/        # SVG іконки
    ├── cache/        # Система кешування
    └── styles/       # Глобальні стилі
```

---

## 🚀 Швидкий старт

### Вимоги

- **Node.js** 18+ (рекомендується LTS)
- **npm** або **yarn**

### Встановлення

```bash
# Клонування репозиторію
git clone <repository-url>
cd otpsk

# Встановлення залежностей
npm install
# або
yarn install
```

### Команди розробки

```bash
# 🔥 Запуск dev сервера
npm run dev

# 🏗️ Збірка для production
npm run build

# 👀 Попередній перегляд build
npm run preview

# 🔍 Перевірка коду (ESLint)
npm run lint
```

Додаток доступний за адресою: **http://localhost:5173**

---

## 🏗️ Архітектурні рішення

### 🎯 Feature Sliced Design

Проєкт побудований за методологією **FSD** для кращої масштабованості:

- **Шарова архітектура** — чітке розділення відповідальності
- **Стандартизована структура** — легко орієнтуватися новим розробникам
- **Ізольовані домени** — незалежні entities та features

### 🔄 Ключові патерни

#### **Retry + Cancellation Pattern**

```typescript
// shared/utils/withRetry.ts
const withRetry = <T>(fn: () => Promise<T>, maxAttempts = 3) => {
  let canceled = false;

  const cancel = () => {
    canceled = true;
    // Genius pattern: reset in next tick for reusability
    setTimeout(() => (canceled = false), 0);
  };

  return { run, cancel };
};
```

#### **Compound Components**

```tsx
// Гнучкі, переиспользовані картки готелів
<HotelCard variant="advanced">
  <HotelCard.Image src={hotel.image} />
  <HotelCard.Title>{hotel.name}</HotelCard.Title>
  <HotelCard.Location country={hotel.country} city={hotel.city} />
  <HotelCard.Price value={tour.price} currency="EUR" />
  <HotelCard.ServicesBlock data={hotel.amenities} />
</HotelCard>
```

#### **Smart Caching**

```typescript
// shared/cache/index.ts
const hotelCache = new Map<string, HotelType[]>();

export const loadHotelsByCountryId = async (countryId: string) => {
  if (hotelCache.has(countryId)) {
    return hotelCache.get(countryId);
  }

  const hotels = await api.getHotels(countryId);
  hotelCache.set(countryId, hotels);
  return hotels;
};
```

### 🎛️ State Management

- **Zustand** для глобального стану (countries)
- **Local state** в хуках для компонентної логіки
- **Cache layer** для оптимізації API викликів

---

## 🧪 Тестування функціональності

### Сценарій використання:

1. **Відкрийте** `http://localhost:5173`
2. **Оберіть країну** з dropdown
3. **Введіть місто** — дочекайтеся автодоповнення (debounce 330ms)
4. **Запустіть пошук** — спостерігайте loading → results
5. **Клікніть на картку** — відкриється детальна сторінка готелю
6. **Спробуйте скасувати** пошук під час виконання

### Стани для перевірки:

- ⏳ **Loading** — спінер та заблокована форма
- ❌ **Error** — обробка помилок API
- 📭 **Empty** — відсутність результатів
- ✅ **Success** — відображення карток з сортуванням за ціною

---

## 💼 Що показати на співбесіді

### 🎯 Ключові моменти для демонстрації:

| Тема               | Що розповісти                               | Код для показу              |
| ------------------ | ------------------------------------------- | --------------------------- |
| **Архітектура**    | FSD methodology, шарове розділення          | `src/` структура            |
| **TypeScript**     | Strict mode, generics, discriminated unions | `entities/*/types.ts`       |
| **Async Logic**    | Token flow, retry, race conditions          | `useSearchTour.ts`          |
| **Performance**    | Debounce, caching, memo optimization        | `useSearchGeo.ts`, `cache/` |
| **UI Patterns**    | Compound components, гнучкий API            | `HotelCard` usage           |
| **Error Handling** | Graceful degradation, user feedback         | `withRetry.ts`              |

### 📊 Метрики проєкту:

- **Час розробки:** ~32 години (3.5 дня інтенсивної роботи)
- **Розмір коду:** 2,780 рядків (2,100 TS/TSX + 680 SCSS)
- **Архітектура:** 6-шарова FSD
- **Commits:** 17 (мінімум переписувань)

### 🗣️ Ключові фрази:

- _"Застосував FSD для масштабованості"_
- _"Реалізував cancellation pattern для запобігання race conditions"_
- _"Використав compound components для гнучкості UI"_
- _"TypeScript strict mode для надійності типів"_

---

## 🚀 Подальші покращення

### 🧪 Testing

- [ ] **Unit tests** — Jest + React Testing Library
- [ ] **Integration tests** — тестування API hooks
- [ ] **E2E tests** — Playwright для користувацьких сценаріїв

### ⚡ Performance

- [ ] **Code splitting** — lazy loading сторінок
- [ ] **Image optimization** — WebP, lazy loading
- [ ] **Bundle analysis** — webpack-bundle-analyzer

### ♿ Accessibility

- [ ] **ARIA labels** — підтримка screen reader
- [ ] **Keyboard navigation** — повна навігація без миші
- [ ] **Focus management** — логічний порядок табуляції

### 🔧 DevOps

- [ ] **CI/CD pipeline** — GitHub Actions
- [ ] **Error monitoring** — Sentry integration
- [ ] **Performance monitoring** — Web Vitals tracking

### 📚 Documentation

- [ ] **API documentation** — OpenAPI/Swagger
- [ ] **Component library** — Storybook
- [ ] **Architecture decisions** — ADR документи

---

## 👨‍💻 Інформація про розробку

**Автор:** ASGladchenko  
**Час розробки:** ~32 години (інтенсивний спринт)  
**Git історія:** 17 коммітів  
**Рівень складності:** Junior+ / Middle-

### 📈 Development Stats:

```
Languages:
├── TypeScript: 2,100 рядків
├── SCSS:       680 рядків
├── JSON:       ~50 рядків
└── Total:      2,830 рядків

Architecture:
├── Components: 25+
├── Custom Hooks: 7
├── Entities: 4 domains
└── Utils: 6 helpers
```

---

## 📝 Commit History

```bash
# Останній commit для README
git add README.md
git commit -m "docs: enhance README with Ukrainian translation and modern styling"
git push origin main
```

---

<div align="center">

**Зроблено з ❤️ та ☕**  
_React • TypeScript • Сучасна архітектура_

</div>
