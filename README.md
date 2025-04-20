💼 Plataforma: SalesEdge AI


# Estrutura de Arquitetura Clean para SalesEdge AI

Abaixo, a estrutura completa de pastas e arquivos para o **Frontend** e **Backend**, seguindo princípios de Clean Architecture e organização por domínios e camadas.

---

## Frontend (Next.js + TypeScript + Tailwind)
```
src/
├── components/            # Componentes UI reutilizáveis (atoms, molecules)
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── styles.module.css
│   ├── Modal/
│   │   ├── Modal.tsx
│   │   └── styles.module.css
│   └── ...
├── containers/            # Componentes de domínio (organismos), combinando UI + lógica mínima
│   ├── Dashboard/
│   │   ├── DashboardContainer.tsx
│   │   ├── DashboardHeader.tsx
│   │   ├── SummarySection.tsx
│   │   ├── BattlecardsSection.tsx
│   │   ├── SimulatorSection.tsx
│   │   └── styles.module.css
│   ├── BattlecardSearch/
│   │   ├── BattlecardSearchContainer.tsx
│   │   ├── CompetitiveTable.tsx
│   │   └── styles.module.css
│   └── ...
├── pages/                 # Páginas (Next.js routing)
│   ├── index.tsx          # Login / Landing
│   ├── dashboard/
│   │   └── index.tsx      # Painel Principal
│   ├── battlecards/
│   │   └── index.tsx      # Battlecards
│   ├── simulator/
│   │   ├── index.tsx      # Simulador
│   │   └── [profile].tsx   # Simulações por perfil de avatar
│   ├── calls/
│   │   └── index.tsx      # Minhas Calls
│   ├── settings/
│   │   ├── integrations.tsx
│   │   ├── users.tsx
│   │   ├── security.tsx
│   │   └── avatars.tsx
│   └── _app.tsx           # App wrapper (Context Providers)
├── hooks/                 # Hooks customizados (useApi, useAuth, useSocket)
│   ├── useAuth.ts
│   ├── useWebsocket.ts
│   └── ...
├── services/              # Integrações com APIs externas (Zoom, CRM, OpenAI)
│   ├── apiClient.ts       # Axios/fetch client configurado
│   ├── zoomService.ts
│   ├── salesforceService.ts
│   └── openaiService.ts
├── contexts/              # Providers de Contexto (Auth, Theme, AppState)
│   ├── AuthContext.tsx
│   └── AppContext.tsx
├── utils/                 # Funções utilitárias gerais
│   ├── formatDate.ts
│   └── validate.ts
├── styles/                # Estilos globais e configurações Tailwind
│   ├── globals.css
│   └── tailwind.config.js
└── tsconfig.json          # Configuração TypeScript
```

---

🧠 Estrutura Final do Backend (NestJS + Prisma + Kafka + WebSocket)
ruby
Copiar
Editar
src/
├── main.ts                          # Bootstrap principal do NestJS
├── app.module.ts                    # Módulo raiz
├── setup.ts                         # Seeders e scripts auxiliares

├── config/                          # Configurações e variáveis
│   ├── configuration.ts             # Carrega variáveis de ambiente
│   ├── validation.ts                # Schema Joi para validação do .env
│   └── environments/                # Diferentes ambientes
│       ├── dev.ts
│       ├── prod.ts
│       └── staging.ts

├── database/                        # ORM (Prisma) + migrações
│   ├── schema.prisma
│   ├── migrations/
│   └── prisma.service.ts            # Singleton para conexão Prisma

├── common/                          # Utilitários e elementos globais
│   ├── guards/                      # AuthGuard, RolesGuard
│   ├── interceptors/               # Logging, Timeout, Transform
│   ├── filters/                    # Exception filters
│   ├── pipes/                      # Validation pipes
│   ├── decorators/                 # @CurrentUser, @Roles, etc
│   ├── constants/
│   └── enums/

├── gateways/                        # WebSockets e eventos tempo real
│   ├── notifications.gateway.ts     # Eventos de sistema (calls, updates)
│   └── liveassist.gateway.ts        # Shadowing ao vivo (modo futuro)

├── pipelines/                       # Stream processors (Kafka)
│   ├── call-transcriber.processor.ts
│   ├── sentiment-analyzer.processor.ts
│   └── insights-aggregator.processor.ts

├── auth/                            # Estratégias globais
│   ├── jwt.strategy.ts
│   ├── jwt-refresh.strategy.ts
│   └── local.strategy.ts

├── modules/                         # Domínios de negócio (Clean Architecture)
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   └── dto/
│   │       ├── login.dto.ts
│   │       └── register.dto.ts

│   ├── users/                       # Gestão de usuários e avatares
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   └── dto/
│   │       ├── update-user.dto.ts
│   │       └── upload-avatar.dto.ts

│   ├── calls/                       # Processamento de chamadas
│   │   ├── calls.controller.ts
│   │   ├── calls.service.ts
│   │   ├── calls.processor.ts       # Kafka consumer
│   │   ├── calls.module.ts
│   │   └── schema/
│   │       └── call.entity.ts

│   ├── battlecards/                 # Comparativos com concorrentes
│   │   ├── battlecards.controller.ts
│   │   ├── battlecards.service.ts
│   │   ├── battlecards.module.ts
│   │   └── dto/
│   │       ├── create-battlecard.dto.ts
│   │       └── update-battlecard.dto.ts

│   ├── simulator/                   # Simulador de negociação com IA
│   │   ├── simulator.controller.ts
│   │   ├── simulator.service.ts
│   │   ├── simulator.module.ts
│   │   └── gateway/
│   │       └── simulator.gateway.ts
│   │   └── dto/
│   │       └── run-simulation.dto.ts

│   ├── integrations/                # Zoom, HubSpot, Salesforce, etc
│   │   ├── integrations.controller.ts
│   │   ├── integrations.service.ts
│   │   ├── integrations.module.ts
│   │   └── oauth/
│   │       ├── zoom.strategy.ts
│   │       ├── hubspot.strategy.ts
│   │       └── salesforce.strategy.ts

│   ├── billing/                     # Stripe / Paddle
│   │   ├── billing.controller.ts
│   │   ├── billing.service.ts
│   │   ├── billing.module.ts
│   │   └── webhook.handler.ts       # Escuta eventos de pagamento

│   ├── reports/                     # Dashboard e análises para líderes
│   │   ├── reports.controller.ts
│   │   ├── reports.service.ts
│   │   ├── reports.module.ts
│   │   └── dto/
│   │       ├── filter-report.dto.ts
│   │       └── export-report.dto.ts
✅ Cobertura de Recursos

Recurso	Presente?	Comentário
Autenticação com JWT + Refresh Token	✅	Seguro e escalável
Kafka para processar chamadas e sentimentos	✅	Streaming real-time garantido
Simulador com WebSocket	✅	Pronto pro avatar e feedback ao vivo
Avatares e perfis de usuário	✅	Com upload e customização futura
Integrações externas (CRM, Zoom)	✅	Cada integração isolada via estratégia
Webhook de pagamentos	✅	Ideal para SaaS por consumo
Módulo de Relatórios	✅	Insights para RH, vendas, RevOps
Arquitetura Clean + Escalável	✅	Separação brutal por domínio + service layer
Segurança e criptografia	✅	TLS + AuthGuards + ISO-ready
🧩 Tech Stack Alinhada

Camada	Tech Principal
Framework	NestJS (Node.js)
ORM	Prisma (PostgreSQL)
Realtime	WebSocket Gateway + Kafka Streams
Auth	JWT + Refresh Token
Infra	AWS (EC2, S3, Cloudflare)
Payments	Stripe ou Paddle SDK
CI/CD	Vercel (front) + GitHub Actions
Monitoramento	Sentry, Datadog, Prometheus
Logs	Winston ou Pino

infra/
├── frontend/
│   └── vercel.json         # Configs do front (envs, rewrites)
├── backend/
│   ├── docker-compose.yml  # Build da API local
│   ├── railway.json        # Deploy automático no Railway
│   └── prisma/
│       └── seed.ts         # Popula dados de teste
├── ci/
│   ├── github-actions/
│   │   ├── test.yml        # Testes unitários
│   │   └── deploy.yml      # Deploy contínuo
├── observability/
│   ├── sentry.config.js
│   └── logrocket.config.ts

---

### Observações de Organização
- Cada **módulo** no backend segue o padrão Controller → Service → DTO → Entity.
- O frontend separa **UI** (components) de **containers** (logica de domínio), e utiliza **services** para comunicação com backend e APIs.
- Arquitetura limpa (Clean Architecture) assegura dependência de dentro para fora: módulos de domínio não conhecem detalhes de infra.
- Reuso e legibilidade: nomenclatura consistente e pastas aninhadas por feature.

Com essa estrutura, sua equipe terá um ponto de partida sólido para desenvolver e escalar o SalesEdge AI de forma organizada e sustentável.




🛡️ Auth, Analytics e Performance

Lib / Stack	Uso
Auth0 / Clerk / NextAuth	Autenticação segura + integração social/SSO
Vercel Analytics	Performance em tempo real do front-end
PostHog / Hotjar	Mapas de calor e gravação de sessão (ótimo p/ feedback UX)
Sentry	Monitoramento de erros
📱 Mobile / PWA (Extra)

Ferramenta	Uso
React Native Web + Expo	Versão responsiva híbrida com código compartilhado
Tauri	Caso queira versão desktop futura com integração nativa (Zoom, arquivos, etc.)
🔥 Stack UI Sugerida pra SalesEdge AI (Foco em performance e expansão futura)
txt
Copiar
Editar
UI Base:       shadcn/ui + Lucide Icons + Tailwind CSS
Gráficos:      Nivo (equipes), ApexCharts (simulação), Recharts (churn simples)
Interações:    Framer Motion + Lottie + SpeechKit
IA:            OpenAI SDK + Whisper + Langchain (para prompts estruturados)
Render 3D:     Unreal Engine via WebSocket (streaming) ou Three.js (fallback)
Estado/App:    Zustand + React Query
Auth:          Auth0 com roles
Analytics:     PostHog (uso) + Sentry (erros)


💼 Plataforma: SalesEdge AI

A vantagem competitiva que seu time de vendas nunca teve antes.

🔹 1. Seção "Resumo da Equipe"

Total de calls analisadas hoje/semana

Top concorrentes mencionados

Pontuação média por simulação

Gráfico: evolução de performance semanal

🔹 2. Seção "Battlecards"

Busca de concorrente

Comparativo automático:

Features, preço, SLA, CSAT

Scripts inteligentes prontos pra usar

Botão “Enviar para Slack/CRM”

Histórico de uso (quem usou e quando)

🔹 3. Seção "Simulador de Negociação"

Selecionar perfil do avatar (ex: CFO Conservador)

Escolher cenário (ex: "Vender ERP para empresa em corte de custos")

Upload de script para treinar

Iniciar simulação

Resultado ao fim: nota + clipe + feedback

🔹 4. Seção “Minhas Calls”

Lista das gravações mais recentes

Insights principais extraídos (ex: "Cliente comparou com Concorrente X")

Tag de emoção/sentimento do cliente

Ação recomendada: responder, agendar follow-up, enviar battlecard

⚙️ 4. Tela de Configurações

Integrações (Zoom, Teams, HubSpot, Salesforce)

Usuários e permissões

Configurações de segurança / LGPD

Personalização de avatares e scripts

Exportações de dados

🧩 5. Tela de Simulação Completa (Treinamento)

Interface:

Tela dividida: avatar à direita (Unreal Engine renderizado) e painel de resposta à esquerda

Resposta do vendedor digitada ou falada

Avatar reage dinamicamente

Timer de simulação, botão de pausa

Após a simulação:

Feedback com nota

Clipes dos momentos-chave

Gráfico de desempenho por categoria (objeção, empatia, técnica)

💸 Monetização Integrada na UI

Tela de upgrade com destaque para:

Simulador ilimitado

API para LMS

Avatares personalizados

Página de checkout segura com Stripe ou Paddle

📈 Painel Admin para Líderes / RH / RevOps

Visão de performance do time

Ranking gamificado (Top 10 vendedores)

Insights agregados:

Qual argumento mais usado

Qual concorrente mais citado

Onde as deals estão sendo perdidas

Exportação para CSV ou conexão com BI (Power BI, Tableau)

🔥 Call-to-Action Final (Enterprise Sales)

“Quer saber onde sua equipe realmente está perdendo dinheiro?
Suba uma gravação e nossa IA te entrega o raio-x do discurso.
Descubra o que dizer quando o cliente cita seu pior concorrente.”

CTA de Produto:
[👊 Agendar Análise de Call Grátis]
(Botão com integração com Typeform + Calendly)

🗺️ Resumo Visual do Fluxo de Front-End

css
Copiar
Editar
[Página Inicial]
   └─> [Login / Cadastro]
         └─> [Painel Principal]
               ├─> Battlecards
               ├─> Simulador
               ├─> Minhas Calls
               ├─> Relatórios
               └─> Configurações
                     └─> Integrações
🧠 Extras Sugeridos (Q4+)

Extensão do Chrome para detectar concorrentes em e-mails automaticamente

App mobile apenas com modo “Battlecard Viewer + Simulador Lite”

Modo Shadowing: simulação ativa durante call real

🔒 Barreiras e Como Vencê-las


Barreira	Dificuldade	Solução
Latência em Tempo Real	Processar áudio/vídeo + gerar respostas em <500ms	Usar modelos leves (ex: DistilBERT) + CDN global (Cloudflare)
Integração com CRMs Legados	Sistemas como Siebel ou SAP têm APIs obscuras	Parceria com consultorias de ERP (ex: Accenture) para criar conectores white-label
Privacidade de Dados	Gravações de calls podem ter informações sensíveis	Anonimização via técnicas de PII masking (ex: substituir nomes por [CLIENTE])
Adoção pelo Time de Vendas	Vendedores seniores resistem a feedbacks de IA	Gamificação: Ranking de performance com bônus para os top 10%
Conformidade Legal	Gravar simulações pode violar leis trabalhistas	Contratos claros com cláusula de "dados sintéticos para treinamento"
📡 Mapa de Integração

Core Modules:

Battlecard Engine: NLP + Knowledge Graph (Neo4j)

Avatar Simulator: Unity Reflect + GPT-4 API

Backend Services:

API Gateway: AWS API Gateway + Auth0 para autenticação

Data Pipeline: Apache Kafka (streaming de dados de CRM/calls)

Cloud Infrastructure:

GPU Nodes: AWS EC2 P4d (para inferência de modelos grandes)

Cold Storage: S3 Glacier para backups de simulações

Data Sources:

Calls: Zoom, Microsoft Teams, Cisco Webex

CRMs: Salesforce, HubSpot, Pipedrive

Competitive Intel: G2, Capterra, LinkedIn Sales Navigator

Security Layer:

Encryption: TLS 1.3 + AES-256

Compliance: Certificação ISO 27001 + SOC 2 Type II

💰 Monetização Agressiva

Pricing Tiers:

Starter: $1,000/mês (1 simulador + 5 battlecards)

Enterprise: $15,000/mês (treinamento ilimitado + API para integração em LMS)

Modelo Híbrido:

Pay-Per-Use: $0.10 por minuto de simulação

Revenue Share: 2% do upsell gerado pelas negociações treinadas

📆 Roadmap de 12 Meses


Trimestre	Entrega
Q3 2024	Launch do Battlecard MVP (integração com Zoom + Salesforce)
Q4 2024	Simulador com avatares básicos + relatórios de desempenho
Q1 2025	Versão enterprise com customização de avatares via upload de vídeo
Q2 2025	Integração com WhatsApp Business para simulações via chat

# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/docs/reference/configuration)
- [CLI Usage](https://turbo.build/docs/reference/command-line-reference)
