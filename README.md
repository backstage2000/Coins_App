# Crypto

## Tech Stack

- **React** — UI library
- **TanStack Query** — server state management
- **Axios** — HTTP client
- **Motion** — animations
- **Ant Design** — UI library
- **lucide-react** — UI Icons


##  📁Project Structure

```
src/
├── main.jsx           # Entry point
├── store.jsx          # React Query client setup
├── config/            # App configuration (Router, axios , theme)
├── pages/             # Route-level page components
├── utils/             # Shared utility functions
├── constants/         # constants data
├── hooks/             # Global hooks (useManualRefetch)
├── components/        # Shared UI components
└── features/
    └── chart/
        ├── hooks/        # TanStack Query hooks
        ├── services/     # Axios API calls

     └── coins/
        ├── hooks/        # TanStack Query hooks
        ├── services/     # Axios API calls
     
```


## Getting Started

### 1. Clone the repository

```bash
git clone 
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:3000
VITE_PAGE_SIZE=50
```

### 4. Run the project

```bash
npm run dev
```
