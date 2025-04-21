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
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

💼 SalesEdge-AI — Domine cada etapa da jornada de vendas com Inteligência Comercial
🎯 Objetivo Principal
SalesEdge-AI é uma plataforma de inteligência comercial que tem como missão aumentar a eficiência e a previsibilidade das equipes de vendas B2B por meio de automação inteligente, insights acionáveis e geração de conteúdo orientado à conversão.

O foco central é ampliar a produtividade de SDRs e Account Executives, reduzindo o ciclo de vendas e aumentando a taxa de conversão através de:

Follow-ups automáticos e reativos com IA

Previsões de pipeline com base em dados reais

Geração de e-mails e scripts personalizados com IA

Análise de chamadas em tempo real para detectar oportunidades ou objeções

Integração com ferramentas que os times de vendas já usam (CRM, e-mail, calendário, etc)

🚀 Visão de Futuro (Roadmap por Nível de Alcance)

Nível	Descrição	Módulos-Chave
MVP (Atual)	Automatiza ações-chave da prospecção e análise de deals. Geração de e-mails, follow-up reativo e previsão de conversão.	automation/, forecasting/, content_generation/, calls/, integrations/
Growth Plan	Avança para simulação de vendas com IA, resumo de conversas e assistente móvel.	call_simulator/, sales_training/, mobile_assistant/, conversation_analysis/
Enterprise Plan	Oferece um ecossistema completo de inteligência comercial integrada. Inclui explainability, coaching, workflows visuais e inteligência regional.	orchestration_engine/, explainable_forecasting/, coaching_360/, heatmap_intel/, emotion_analysis/, knowledge_mesh/
📈 Metas e Impacto Esperado no Mercado
Para os clientes:
Redução de 30% no ciclo de vendas

Aumento de até 50% na taxa de conversão de leads em oportunidades

Economia de tempo com automação de tarefas repetitivas

Insights de verdade com base em dados reais (voz, texto, histórico)

Para o mercado:
Ser referência no segmento de IA aplicada à inteligência de vendas

Construir uma plataforma modular e escalável para empresas B2B

Estabelecer parcerias com grandes CRMs e players de MarTech/SalesTech

🧠 Diferenciais Estratégicos
🔁 Motor de automação reativo baseado em eventos (calls, emails, reuniões)

✍️ Geração de conteúdo com IA customizada para cada lead

🔎 Análise semântica de conversas e sentimento real das interações

📊 Forecast com explicabilidade de fatores que influenciam cada deal

📞 Simulador de vendas com IA para treinar e capacitar SDRs e AEs

🧬 Integração com CRMs líderes (Salesforce, Hubspot, etc)

🔐 Foco na Satisfação do Cliente
A jornada de desenvolvimento do SalesEdge-AI é centrada no sucesso do cliente, com foco em:

Onboarding guiado com casos reais

Planos escaláveis para atender desde startups até grandes contas

Resultados tangíveis em menos de 30 dias de uso

Equipe de suporte e sucesso alinhada com metas comerciais do cliente



🧠 Backend – NestJS + Prisma + Kafka + LLM Integration + Clean Architecture
apps/api/src
├── main.ts
├── app.module.ts
├── setup.ts

apps/api/src/modules
├── tenants            # Multitenancy + Auth
│   ├── domain
│   │   ├── tenant.entity.ts
│   │   ├── user.entity.ts
│   │   ├── role.entity.ts
│   │   └── permission.entity.ts
│   ├── application
│   │   ├── create-tenant.usecase.ts
│   │   ├── invite-user.usecase.ts
│   │   ├── assign-role.usecase.ts
│   │   └── validate-tenant-context.usecase.ts
│   ├── infrastructure
│   │   ├── tenant.repository.ts
│   │   └── auth-strategy.ts
│   └── controllers
│       └── tenants.controller.ts
├── integrations       # CRM, Email, Calendários
│   ├── crm
│   │   ├── infrastructure
│   │   │   ├── salesforce.client.ts
│   │   │   └── hubspot.client.ts
│   │   └── application
│   │       └── sync-opportunities.usecase.ts
│   ├── email
│   │   ├── infrastructure
│   │   │   └── email.service.ts
│   │   └── application
│   │       └── send-email.usecase.ts
│   └── calendar
│       ├── infrastructure
│       │   └── calendar.service.ts
│       └── application
│           └── sync-events.usecase.ts
├── forecasting        # Analytics preditivo e Pipeline Health
│   ├── domain
│   │   ├── deal.entity.ts
│   │   └── forecast-result.model.ts
│   ├── application
│   │   ├── generate-forecast.usecase.ts
│   │   └── compute-pipeline-health.usecase.ts
│   ├── infrastructure
│   │   └── forecast.service.ts
│   └── controllers
│       └── forecast.controller.ts
├── content_generation # Geração de e‑mails e scripts AI
│   ├── domain
│   │   └── draft-email.model.ts
│   ├── application
│   │   ├── generate-email.usecase.ts
│   │   └── generate-script.usecase.ts
│   ├── infrastructure
│   │   └── openai.provider.ts
│   └── controllers
│       └── content-generation.controller.ts
└── automation         # Agente de follow‑up autônomo
    ├── domain
    │   └── followup-task.entity.ts
    ├── application
    │   └── run-followups.usecase.ts
    ├── infrastructure
    │   └── auto-followup.service.ts
    └── controllers
        └── automation.controller.ts

├── config
│   ├── configuration.ts
│   ├── validation.ts
│   └── environments
│       ├── dev.ts
│       ├── prod.ts
│       └── staging.ts

├── database
│   ├── schema.prisma
│   ├── migrations/
│   └── prisma.service.ts

├── common
│   ├── decorators
│   │   └── CurrentUser.ts
│   ├── guards
│   │   ├── AuthGuard.ts
│   │   └── RolesGuard.ts
│   ├── pipes
│   │   └── ValidationPipe.ts
│   ├── interceptors
│   │   ├── LoggingInterceptor.ts
│   │   └── TimeoutInterceptor.ts
│   ├── filters
│   │   └── HttpExceptionFilter.ts
│   ├── constants
│   │   └── index.ts
│   └── enums
│       └── Role.ts

├── gateways
│   ├── notifications.gateway.ts
│   └── liveassist.gateway.ts

├── pipelines
│   ├── call-transcriber.processor.ts
│   ├── sentiment-analyzer.processor.ts
│   └── insights-aggregator.processor.ts

├── auth
│   ├── jwt.strategy.ts
│   ├── jwt-refresh.strategy.ts
│   ├── local.strategy.ts
│   └── auth.module.ts

├── modules
 data_science/ 
├── domain/
│   ├── feature.entity.ts             // features persistidas
│   ├── prediction.entity.ts          // predições armazenadas
│   └── model.entity.ts               // registro de modelos
├── application/
│   ├── create-feature.usecase.ts     // processamento e normalização
│   ├── train-model.usecase.ts        // trigger de treinamento
│   └── generate-prediction.usecase.ts// previsão real-time
├── infrastructure/
│   ├── feature.store.ts              // armazenamento e query
│   ├── model.registry.ts             // MLflow ou W&B
│   └── prediction.engine.ts          // integração com sklearn / XGBoost / PyTorch
└── controllers/
    └── data-insights.controller.ts
│   ├── auth
│   │   ├── domain
│   │   │   └── user.entity.ts
│   │   ├── application
│   │   │   └── login.usecase.ts
│   │   ├── infrastructure
│   │   │   └── jwt.service.ts
│   │   └── controllers
│   │       └── auth.controller.ts
│   │
│   ├── calls
│   │   ├── domain
│   │   │   ├── call.entity.ts
│   │   │   └── transcript.entity.ts
│   │   ├── application
│   │   │   ├── transcribe-call.usecase.ts
│   │   │   └── analyze-sentiment.usecase.ts
│   │   ├── infrastructure
│   │   │   ├── speech-to-text.service.ts
│   │   │   └── sentiment-model.service.ts
│   │   └── controllers
│   │       └── calls.controller.ts
│   │
│   ├── conversation_analysis
│   │   ├── domain
│   │   │   └── conversation.entity.ts
│   │   ├── application
│   │   │   └── summarize-conversation.usecase.ts
│   │   ├── infrastructure
│   │   │   └── whisper.service.ts
│   │   └── controllers
│   │       └── conversation.controller.ts
│   │
│   ├── live_assistant
│   │   ├── domain
│   │   │   └── live-suggestion.entity.ts
│   │   ├── application
│   │   │   └── process-live-audio.usecase.ts
│   │   ├── infrastructure
│   │   │   └── streaming-stt.service.ts
│   │   └── controllers
│   │       └── live-assistant.controller.ts
│   │
│   ├── sales_training
│   │   ├── domain
│   │   │   ├── training-scenario.entity.ts
│   │   │   └── simulation-session.entity.ts
│   │   ├── application
│   │   │   ├── start-simulation.usecase.ts
│   │   │   └── handle-user-message.usecase.ts
│   │   ├── infrastructure
│   │   │   └── ai-chat.service.ts
│   │   └── controllers
│   │       └── training.controller.ts
│   │
│   ├── content_generation
│   │   ├── domain
│   │   │   └── draft-email.model.ts
│   │   ├── application
│   │   │   └── generate-email.usecase.ts
│   │   ├── infrastructure
│   │   │   └── openai.provider.ts
│   │   └── controllers
│   │       └── content.controller.ts
│   │
│   ├── competitive_intelligence
│   │   ├── domain
│   │   │   └── competitor.entity.ts
│   │   ├── application
│   │   │   └── detect-competitors.usecase.ts
│   │   ├── infrastructure
│   │   │   └── ner.service.ts
│   │   └── controllers
│   │       └── competitor.controller.ts
│   │
│   ├── forecasting
│   │   ├── domain
│   │   │   ├── deal.entity.ts
│   │   │   └── forecast-result.model.ts
│   │   ├── application
│   │   │   └── generate-forecast.usecase.ts
│   │   ├── infrastructure
│   │   │   └── forecast.service.ts
│   │   └── controllers
│   │       └── forecast.controller.ts
│   │
│   ├── integrations
│   │   ├── oauth
│   │   │   └── salesforce.strategy.ts
│   │   ├── infrastructure
│   │   │   └── salesforce.client.ts
│   │   ├── application
│   │   │   └── sync-opportunities.usecase.ts
│   │   └── controllers
│   │       └── integration.controller.ts
│   │
│   ├── automation/
│   ├── application
│   │   ├── run-followups.usecase.ts
│   │   └── trigger-actions.usecase.ts   # Novo: motor reativo
│   ├── infrastructure
│   │   └── auto-followup.service.ts
│   │   └── event-monitor.service.ts     # Novo: observa eventos (calls, emails etc.)
│   └── domain
│       └── action-rule.entity.ts        # Regras tipo: "se call negativa → cria task"
│       └── followup-task.entity.ts
├── orchestration_engine/                # NOVO
│   ├── domain/
│   │   └── workflow.entity.ts
│   ├── application/
│   │   └── create-workflow.usecase.ts
│   │   └── run-workflow.usecase.ts
│   ├── infrastructure/
│   │   └── node-executor.service.ts
│   │   └── input-trigger.registry.ts
│   └── controllers/
│       └── workflows.controller.ts
├── knowledge_mesh/                      # NOVO
│   ├── domain/
│   │   ├── document.entity.ts
│   │   ├── embedding.entity.ts
│   ├── application/
│   │   ├── ingest-document.usecase.ts
│   │   ├── search-knowledge.usecase.ts
│   ├── infrastructure/
│   │   ├── vector-db.service.ts (ex: Pinecone, Weaviate)
│   │   └── document-parser.service.ts
│   └── controllers/
│       └── mesh.controller.ts
├── coaching_360/                        # NOVO
│   ├── domain/
│   │   ├── behavior-profile.entity.ts
│   │   ├── coaching-plan.entity.ts
│   ├── application/
│   │   ├── analyze-style.usecase.ts
│   │   └── recommend-improvement.usecase.ts
│   ├── infrastructure/
│   │   └── cluster-analysis.service.ts
│   └── controllers/
│       └── coaching.controller.ts
├── call_simulator/                      # NOVO
│   ├── domain/
│   │   ├── scenario.entity.ts
│   │   └── session.entity.ts
│   ├── application/
│   │   ├── start-session.usecase.ts
│   │   └── handle-dialog.usecase.ts
│   ├── infrastructure/
│   │   ├── llm-dialog.service.ts
│   │   └── tts.service.ts
│   └── controllers/
│       └── simulator.controller.ts
├── heatmap_intel/                       # NOVO
│   ├── domain/
│   │   └── region-insight.entity.ts
│   ├── application/
│   │   └── aggregate-objection-data.usecase.ts
│   ├── infrastructure/
│   │   └── heatmap.service.ts
│   └── controllers/
│       └── heatmap.controller.ts
├── explainable_forecasting/            # NOVO (pode ser extensão do atual forecasting/)
│   ├── domain/
│   │   ├── forecast-feature.entity.ts
│   │   ├── explanation.entity.ts
│   ├── application/
│   │   ├── explain-deal-score.usecase.ts
│   │   ├── forecast-deal.usecase.ts
│   ├── infrastructure/
│   │   └── hybrid-model.service.ts
│   └── controllers/
│       └── explainable.controller.ts
├── emotion_analysis/                   # NOVO
│   ├── domain/
│   │   ├── vocal-signal.entity.ts
│   │   └── multimodal-emotion.entity.ts
│   ├── application/
│   │   ├── detect-vocal-mood.usecase.ts
│   │   └── fuse-text-audio.usecase.ts
│   ├── infrastructure/
│   │   ├── audio-features.service.ts
│   │   └── emotion-model.service.ts
│   └── controllers/
│       └── emotion.controller.ts
├── mobile_assistant/                   # NOVO
│   ├── domain/
│   │   └── mobile-notification.entity.ts
│   ├── application/
│   │   ├── generate-summary.usecase.ts
│   │   └── notify-user.usecase.ts
│   ├── infrastructure/
│   │   └── push-gateway.service.ts
│   │   └── mobile-voice-input.service.ts
│   └── controllers/
│       └── mobile.controller.ts
│   │
│   ├── billing
│   │   ├── webhook.handler.ts
│   │   ├── billing.service.ts
│   │   ├── billing.controller.ts
│   │   └── billing.module.ts
│   │
│   └── reports
│       ├── domain
│       │   └── report.model.ts
│       ├── application
│       │   └── generate-report.usecase.ts
│       ├── infrastructure
│       │   └── report.service.ts
│       └── controllers
│           └── reports.controller.ts

✅ MÓDULOS EM PRODUÇÃO (MVP ATIVO)
Esses módulos estão ativos na versão MVP e são essenciais para o ciclo de vendas, automação de follow-up, geração de conteúdo e previsão de pipeline.


Módulo	Finalidade
tenants/	Multitenancy, controle de usuários, permissões e autenticação
auth/	Estratégias JWT, login, refresh token
calls/	Transcrição de chamadas e análise de sentimento
content_generation/	Geração de e-mails e scripts comerciais via IA
forecasting/	Previsão de pipeline e scoring de oportunidades
automation/	Automação de follow-ups e motor de regras reativo
integrations/	Integrações com CRM (Salesforce, Hubspot), e-mails e calendários
data_science/	Extração de features e inferência com modelos ML
common/	Pipes, guards, interceptors, decorators, enums globais
config/	Configuração de ambiente (dev, prod, staging)
database/	Prisma schema, migrações e service
gateways/	WebSocket gateways (notificações, live assist)
pipelines/	Processamento assíncrono de chamadas, análises e insights
🧼 MÓDULOS PAUSADOS (PASTA _future/)
Esses módulos estão estruturados, mas fora do escopo do MVP inicial. Serão ativados em versões futuras (Planos Growth, Enterprise ou funcionalidades premium).


Módulo	Finalidade	Quando ativar
conversation_analysis/	Resumo de conversas com IA	Growth
sales_training/	Simulação de vendas com IA	Growth/Enterprise
coaching_360/	Análise de perfil e coaching de vendedores	Enterprise
call_simulator/	Simulador de cold call com LLM + TTS	Enterprise
heatmap_intel/	Objeções e inteligência por região	Enterprise
explainable_forecasting/	Previsões com explicabilidade híbrida	Enterprise
emotion_analysis/	Detecção emocional em chamadas (voz/texto)	Premium
mobile_assistant/	Assistente móvel com voz e push	Growth/Mobile-first
knowledge_mesh/	Busca semântica em documentos (RAG + vetores)	Enterprise
orchestration_engine/	Motor de automação visual (low-code workflows)	Enterprise
📂 Estrutura da pasta _future/
Todos os módulos pausados estão organizados dentro de:

swift
Copiar
Editar
apps/api/src/modules/_future/
✅ Regras para ativação futura
Quando for ativar um módulo:

Mover da pasta _future/ para modules/

Ativar rotas e bindings no app.module.ts

Checar dependências (OpenAI, TTS, Pinecone, etc)

Verificar feature flags (se estiver usando)


🧠 MÓDULO data_science/ – LÓGICAS ANALÍTICAS AVANÇADAS
Pipeline Inteligente Centralizado para Predições, Score, Feature Store e Integração Multimodular.

data_science/ – LÓGICAS ANALÍTICAS AVANÇADAS
Pipeline Inteligente Centralizado para Predições, Score, Feature Store e Integração Multimodular.

🔹 feature.entity.ts
Lógica Técnica Avançada:

Armazena vetores de features numéricos, categóricos ou vetorizados textualmente.

Entrada para todos os modelos supervisionados, não supervisionados e LLMs fine-tuned.

Pode conter embeddings de:

Áudio: MFCC, Spectrograms

Texto: BERT embeddings, TF-IDF, Word2Vec, Doc2Vec

Comportamento: tempo de fala, número de turnos, entonação média

Fonte: calls/, training/, crm/, calendar/

Técnicas Python por função:

sklearn.feature_extraction.text.TfidfVectorizer

transformers.BertModel (para embeddings contextuais)

nltk.sent_tokenize, spaCy, NER tagging

librosa para features acústicas

🔹 prediction.entity.ts
Lógica Técnica Avançada:

Cada predição gerada (churn, fechamento de deal, performance do vendedor) gera um log técnico.

Permite:

Backtest dos modelos

Auditoria regulatória (LGPD, GDPR)

Dataset contínuo de aprendizado

Cada log possui:

Input original (vetor)

Output (classificação, score, bounding box)

Metadata: modelo, versão, tempo de inferência, tenantId

Técnicas Python:

joblib.dump/load para armazenamento de modelos

Logging com mlflow.log_metrics(), mlflow.log_artifact()

🔹 model.entity.ts
Lógica Técnica Avançada:

Histórico de todos os modelos treinados e utilizados (por tenant, global ou segmentado).

Contém:

Algoritmo usado (XGBoost, CatBoost, LSTM, CNN)

Dataset de origem (calls, CRM, trainings)

Métricas: accuracy, f1, recall, ROC-AUC, MCC

Hiperparâmetros usados (via Optuna ou GridSearchCV)

Versão, data, status

Ferramentas utilizadas:

MLFlow, Weights & Biases

optuna, scikit-optimize, RayTune

🔹 create-feature.usecase.ts
Lógica Técnica Avançada:

Recebe inputs dos módulos:

calls/: transcript + áudio

training/: diálogos simulados

crm/: oportunidades

Etapas:

Pré-processamento textual:

Stopword removal, stemming, lemmatization

Cleaning com regex e langdetect

Vetorização e embedding:

BERT (textual)

VGGish ou MFCC (áudio)

OneHot / LabelEncoder (categorias)

Normalização:

MinMaxScaler, RobustScaler

Salvar no store

Técnicas aplicadas:

transformers, sentence-transformers, librosa, sklearn.preprocessing, umap-learn (para projeção em 2D)

🔹 train-model.usecase.ts
Lógica Técnica Avançada:

Treinamento supervisionado e semi-supervisionado

Suporte para:

Classificação (binária, multi-class)

Regressão (forecasting de receita)

Clustering (perfis de cliente)

Modelos sequenciais (LSTM) para comportamento

Pós-processamento:

Validação cruzada

Matriz de confusão

Explicabilidade com SHAP ou LIME

Hiperparâmetros:

Otimização via Optuna

Técnicas:

XGBoost, CatBoost, LightGBM, sklearn, pytorch, tensorflow

MLflow para logging de cada modelo

🔹 generate-prediction.usecase.ts
Lógica Técnica Avançada:

Inferência real-time ou batch.

Autodetecção de tipo de modelo (por contexto):

forecasting, follow-up, simulação, risco

Output:

Probabilidade

Classe

Explicação (feature importance via SHAP)

Canal de entrega:

REST

WebSocket

Kafka Event (para automações downstream)

Técnicas:

ONNXRuntime ou TorchServe para low-latency

sklearn.pipeline ou dask para batch

FastAPI, NestJS no wrapper da inferência

🔹 feature.store.ts
Lógica Técnica Avançada:

Banco híbrido:

PostgreSQL (principal)

Redis (cache quente)

Parquet/MinIO (batch & histórico)

Suporte a:

Versionamento

Cache por tenant/contexto

Query por período ou evento

Embeddings vetorizados podem ser enviados para Pinecone ou Weaviate

🔹 model.registry.ts
Lógica Técnica Avançada:

API sobre MLflow ou banco próprio

Guarda:

Versão

Score

Endpoint

Condições de uso (range ideal de input)

CI/CD com deploy automático via GitHub Actions ou ArgoCD

🔹 prediction.engine.ts
Lógica Técnica Avançada:

Orquestração de:

Carregamento do modelo correto

Pré-processamento input

Inferência

Pós-processamento output

Suporta:

Modelos de CPU/GPU

Modelos per-tenant

Modelos híbridos com fallback LLM

🔹 data-insights.controller.ts
Lógica Técnica Avançada:

Endpoint REST + Admin Dashboard

Permite:

Disparo manual de predição

Consulta de logs

Visualização de feature importance, score evolution, drift detection

Protegido por RBAC, tenantId e camadas de escopo

📡 Fontes de Dados Consumidas (por tipo de feature)

Origem	Features Capturadas	Técnicas Usadas
calls/	duração, emoções, temas, NER, silêncio	Whisper, pyAudioAnalysis, spaCy, BERT
training/	nota, erro, tempo de resposta	NLP, classificação supervisionada
crm/	tempo de ciclo, valor, origem, comportamento	Feature hashing, GBDT
live_assistant/	reações ao vivo, dúvidas frequentes	STT streaming, zero-shot classification
automation/	tempo de follow-up, taxa de sucesso	Regressão, previsão de conversão
conversation_analysis/	tópico dominante, tom	BERTopic, sentiment analysis
forecasting/	pipeline velocity, probabilidades	LSTM + XGBoost
reports/	agregações, heatmaps preditivos	clustering (KMeans), Dash/Plotly



🔹 feature.entity.ts
Lógica Técnica Avançada:

Armazena vetores de features numéricos, categóricos ou vetorizados textualmente.

Entrada para todos os modelos supervisionados, não supervisionados e LLMs fine-tuned.

Pode conter embeddings de:

Áudio: MFCC, Spectrograms

Texto: BERT embeddings, TF-IDF, Word2Vec, Doc2Vec

Comportamento: tempo de fala, número de turnos, entonação média

Fonte: calls/, training/, crm/, calendar/

Técnicas Python por função:

sklearn.feature_extraction.text.TfidfVectorizer

transformers.BertModel (para embeddings contextuais)

nltk.sent_tokenize, spaCy, NER tagging

librosa para features acústicas

🔹 prediction.entity.ts
Lógica Técnica Avançada:

Cada predição gerada (churn, fechamento de deal, performance do vendedor) gera um log técnico.

Permite:

Backtest dos modelos

Auditoria regulatória (LGPD, GDPR)

Dataset contínuo de aprendizado

Cada log possui:

Input original (vetor)

Output (classificação, score, bounding box)

Metadata: modelo, versão, tempo de inferência, tenantId

Técnicas Python:

joblib.dump/load para armazenamento de modelos

Logging com mlflow.log_metrics(), mlflow.log_artifact()

🔹 model.entity.ts
Lógica Técnica Avançada:

Histórico de todos os modelos treinados e utilizados (por tenant, global ou segmentado).

Contém:

Algoritmo usado (XGBoost, CatBoost, LSTM, CNN)

Dataset de origem (calls, CRM, trainings)

Métricas: accuracy, f1, recall, ROC-AUC, MCC

Hiperparâmetros usados (via Optuna ou GridSearchCV)

Versão, data, status

Ferramentas utilizadas:

MLFlow, Weights & Biases

optuna, scikit-optimize, RayTune

🔹 create-feature.usecase.ts
Lógica Técnica Avançada:

Recebe inputs dos módulos:

calls/: transcript + áudio

training/: diálogos simulados

crm/: oportunidades

Etapas:

Pré-processamento textual:

Stopword removal, stemming, lemmatization

Cleaning com regex e langdetect

Vetorização e embedding:

BERT (textual)

VGGish ou MFCC (áudio)

OneHot / LabelEncoder (categorias)

Normalização:

MinMaxScaler, RobustScaler

Salvar no store

Técnicas aplicadas:

transformers, sentence-transformers, librosa, sklearn.preprocessing, umap-learn (para projeção em 2D)

🔹 train-model.usecase.ts
Lógica Técnica Avançada:

Treinamento supervisionado e semi-supervisionado

Suporte para:

Classificação (binária, multi-class)

Regressão (forecasting de receita)

Clustering (perfis de cliente)

Modelos sequenciais (LSTM) para comportamento

Pós-processamento:

Validação cruzada

Matriz de confusão

Explicabilidade com SHAP ou LIME

Hiperparâmetros:

Otimização via Optuna

Técnicas:

XGBoost, CatBoost, LightGBM, sklearn, pytorch, tensorflow

MLflow para logging de cada modelo

🔹 generate-prediction.usecase.ts
Lógica Técnica Avançada:

Inferência real-time ou batch.

Autodetecção de tipo de modelo (por contexto):

forecasting, follow-up, simulação, risco

Output:

Probabilidade

Classe

Explicação (feature importance via SHAP)

Canal de entrega:

REST

WebSocket

Kafka Event (para automações downstream)

Técnicas:

ONNXRuntime ou TorchServe para low-latency

sklearn.pipeline ou dask para batch

FastAPI, NestJS no wrapper da inferência

🔹 feature.store.ts
Lógica Técnica Avançada:

Banco híbrido:

PostgreSQL (principal)

Redis (cache quente)

Parquet/MinIO (batch & histórico)

Suporte a:

Versionamento

Cache por tenant/contexto

Query por período ou evento

Embeddings vetorizados podem ser enviados para Pinecone ou Weaviate

🔹 model.registry.ts
Lógica Técnica Avançada:

API sobre MLflow ou banco próprio

Guarda:

Versão

Score

Endpoint

Condições de uso (range ideal de input)

CI/CD com deploy automático via GitHub Actions ou ArgoCD

🔹 prediction.engine.ts
Lógica Técnica Avançada:

Orquestração de:

Carregamento do modelo correto

Pré-processamento input

Inferência

Pós-processamento output

Suporta:

Modelos de CPU/GPU

Modelos per-tenant

Modelos híbridos com fallback LLM

🔹 data-insights.controller.ts
Lógica Técnica Avançada:

Endpoint REST + Admin Dashboard

Permite:

Disparo manual de predição

Consulta de logs

Visualização de feature importance, score evolution, drift detection

Protegido por RBAC, tenantId e camadas de escopo

📡 Fontes de Dados Consumidas (por tipo de feature)

Origem	Features Capturadas	Técnicas Usadas
calls/	duração, emoções, temas, NER, silêncio	Whisper, pyAudioAnalysis, spaCy, BERT
training/	nota, erro, tempo de resposta	NLP, classificação supervisionada
crm/	tempo de ciclo, valor, origem, comportamento	Feature hashing, GBDT
live_assistant/	reações ao vivo, dúvidas frequentes	STT streaming, zero-shot classification
automation/	tempo de follow-up, taxa de sucesso	Regressão, previsão de conversão
conversation_analysis/	tópico dominante, tom	BERTopic, sentiment analysis
forecasting/	pipeline velocity, probabilidades	LSTM + XGBoost
reports/	agregações, heatmaps preditivos	clustering (KMeans), Dash/Plotly


🧠 Módulos Core – SalesEdge AI Enterprise
Formato:

Arquivo

Lógica Técnica Avançada

Técnicas Usadas (ML, NLP, infra)

Integrações cruzadas entre módulos

🔐 auth/ – Autenticação e Segurança Multi-Tenant
user.entity.ts
Representa identidade, RBAC, perfil e tokens de sessão.

Suporta multi-tenant context, roles, lastLogin, linkedIntegrations.

login.usecase.ts
Login com JWT e refresh token.

Detecção de anomalias no login (futuro).

Pode integrar feature de MFA e device fingerprint.

jwt.service.ts
Geração e renovação segura com tenantId, exp, scopes.

Suporte para SSO, OIDC, integração com Auth0 se necessário.

auth.controller.ts
Entrada REST da auth: login, refresh, whoami.

📌 Integração com: todos os módulos (auth guard) + analytics (tempo de sessão)

📞 calls/ – Processamento de Chamadas Gravadas
call.entity.ts / transcript.entity.ts
Guarda metadados (participantes, duração, score) e texto full da call.

transcribe-call.usecase.ts
Transcrição com Whisper ou Deepgram

Normaliza áudio, remove ruído e organiza turnos de fala

analyze-sentiment.usecase.ts
Score de emoção, tom, stress e empatia por trecho.

Output: valence, arousal, intenção.

speech-to-text.service.ts
Wrapper de múltiplos STT engines: Whisper, AWS, Google, etc.

sentiment-model.service.ts
Modelos finetuned (DistilBERT + audio) para sentimento.

📌 Integração com: data_science, automation, reports

🧠 conversation_analysis/
conversation.entity.ts
Identifica tópicos, subtemas, objeções, entidades citadas.

Track por tempo (timestamp de highlights).

summarize-conversation.usecase.ts
Resumo contextual baseado em LLM (GPT-4, Mistral)

Classifica objetivos, decisão final, gaps

whisper.service.ts
Pós-processamento de texto gerado via STT (normalização, fix NLP)

📌 Integração com: content_generation, automation, reports

🔴 live_assistant/
live-suggestion.entity.ts
Armazena sugestões feitas em tempo real por IA.

Categoriza por tipo: objeção, técnica, frase de impacto.

process-live-audio.usecase.ts
Recebe áudio chunked via WebSocket.

STT + classificação zero-shot + sugestão IA.

streaming-stt.service.ts
Usa Whisper streaming + Redis para cache semântico da conversa.

📌 Integração com: calls, automation, analytics

🎓 sales_training/
training-scenario.entity.ts / simulation-session.entity.ts
Cenários simulados: persona, produto, contexto de venda.

Track de performance: tempo, notas, hesitações, pontos fortes.

start-simulation.usecase.ts
Inicia simulação com avatar + IA generativa.

Contextualiza com histórico do vendedor.

handle-user-message.usecase.ts
IA responde com base em comportamento e histórico.

Suporte a feedback adaptativo e tips em tempo real.

ai-chat.service.ts
Orquestrador com Langchain, memória contextual, OpenAI API.

📌 Integração com: data_science, reports, automation

✍️ content_generation/
draft-email.model.ts
Estrutura de conteúdo dinâmico com variáveis.

Campos: objetivo, tom, CTA, link para CRM

generate-email.usecase.ts
IA cria e-mail com base em call + CRM + intenção.

Suporte a fine-tuning por segmento (B2B SaaS, FinTech)

openai.provider.ts
Conecta a modelos GPT com suporte a templates e variantes.

📌 Integração com: calls, crm, automation

🧠 competitive_intelligence/
competitor.entity.ts
Nome, categoria, pontos fortes/fracos, frequência mencionada.

detect-competitors.usecase.ts
NLP + NER + heurística: detecta concorrentes citados em calls.

Mapeia frequência, argumentos usados, resposta da equipe.

ner.service.ts
spaCy, GPT NER, modelos proprietários para contexto de vendas.

📌 Integração com: training (battlecards), reports, analytics

📊 forecasting/
deal.entity.ts / forecast-result.model.ts
Deals atrelados ao pipeline de vendas, stage, score, tempo médio.

generate-forecast.usecase.ts
Previsão com base em:

Histórico CRM

Call sentiment

Taxa de conversão por tipo de lead

forecast.service.ts
Modelos: XGBoost, LSTM, regressão logística, etc.

Output: probabilidade de fechamento + confidence interval

📌 Integração com: calls, crm, data_science

🔄 integrations/
salesforce.client.ts, hubspot.client.ts
Fetch/Push de:

Leads

Oportunidades

Notas de reunião

Suporte a rate-limit e fallback local

sync-opportunities.usecase.ts
ETL: sincroniza CRM com forecasting e insights.

Detecta discrepâncias e registra histórico.

📌 Integração com: forecasting, reports, content_generation

⚙️ automation/
followup-task.entity.ts
Representa ação a ser tomada (e-mail, alerta, reunião).

Triggered por insights IA.

run-followups.usecase.ts
Detecta eventos como:

cliente ficou negativo

vendedor não respondeu objeção

Executa sequência: "envia e-mail", "alinha no CRM"

auto-followup.service.ts
Orquestrador de automações: com Zapier, webhooks ou nativo

📌 Integração com: calls, content, crm, assistant

💸 billing/
billing.service.ts
Lida com plano ativo, consumo de IA (minutos, tokens), upgrades.

webhook.handler.ts
Recebe eventos da Stripe/Paddle: pagamento, reembolso, falha.

📌 Integração com: auth (limite de uso), reports

📈 reports/
report.model.ts
Dataset completo com:

performance por user

performance por simulação

uso de IA por tenant

generate-report.usecase.ts
Agrega dados:

Forecasting

Competitors

Calls

Score do time de vendas

report.service.ts
Gera relatórios prontos + envia por e-mail

📌 Integração com: todos os módulos analíticos
 common/ – Utilitários Globais, Segurança e Observabilidade
🧩 decorators/CurrentUser.ts
Lógica:

Injeta o payload do JWT no contexto do request.

Acessa userId, tenantId, role, scopes.

Usado por qualquer controller protegido para garantir contexto multi-tenant.

Técnicas e Funções:

Extração de claims JWT com validação.

Compatível com guards (AuthGuard, RolesGuard).

🛡️ guards/
AuthGuard.ts
Lógica:

Valida se o token JWT está presente e correto.

Confirma validade, expiração, escopo, e existência do usuário ativo.

RolesGuard.ts
Lógica:

Verifica se o CurrentUser possui a role necessária por rota ou escopo.

Usa enum Role e decorator @Roles('admin') etc.

Técnicas:

RBAC full via metadata reflection + contexto de tenant.

🧹 pipes/ValidationPipe.ts
Lógica:

Validação automática de DTOs com class-validator.

Retorna 422 se o formato estiver incorreto.

Converte tipos automaticamente (ex: string para number em query).

Extra:

Logging automático de erros de validação (via Interceptor).

Pode ativar transform: true para GraphQL futuramente.

📡 interceptors/
LoggingInterceptor.ts
Lógica:

Loga toda requisição e resposta com:
timestamp, rota, tenantId, userId, status, duração.

TimeoutInterceptor.ts
Lógica:

Timeout global por request (default: 30s).

Previne travamentos silenciosos em operações de IA ou STT externas.

Extras:

Permite override por rota via decorator (@Timeout(60_000))

❗ filters/HttpExceptionFilter.ts
Lógica:

Captura e formata todos os erros HTTP lançados nos controllers.

Output padronizado:

json
Copiar
Editar
{ statusCode, message, errorType, timestamp }
Registra stack trace para debugging no ambiente dev.

Integração:

Envia logs para Sentry / Loki / Datadog se habilitado.

📚 constants/index.ts
Lógica:

Centraliza constantes globais como:

DEFAULT_TIMEOUT, MAX_FILE_SIZE, ALLOWED_EXTENSIONS

DEFAULT_AVATAR_PATH, IA_RETRY_LIMIT, etc.

Boas práticas:

Evita valores mágicos soltos na codebase.

Reutilizado por pipes, guards, interceptors e processors.

🧬 enums/Role.ts
Lógica:

Enum com papéis do sistema:

ADMIN, MANAGER, REP, GUEST, SUPER_ADMIN.

Técnicas:

Usado por guards + decorators de RBAC.

Pode ser versionado com o tempo (multi-role por tenant).

🌐 gateways/ – WebSocket e Eventos Reativos
notifications.gateway.ts
Lógica:

Envia notificações em tempo real (ex: call analisada, simulação pronta).

Multicanal: Slack, Web, E-mail (via fallback).

Separado por tenantId + userId.

Técnicas:

WebSocket Gateway + filtros multi-tenant

Broadcast + Direct Messaging

liveassist.gateway.ts
Lógica:

WebSocket bidirecional para áudio ao vivo do vendedor com cliente.

Permite transcrição chunk a chunk e feedback em tempo real da IA.

Técnicas:

AudioStream → STT → Classificação → Sugestão IA

Cache Redis com contexto temporal

Escuta de eventos Kafka para feedbacks paralelos

Integração:

live_assistant, calls, automation, data_science

🔁 pipelines/ – Processadores Assíncronos com Kafka
call-transcriber.processor.ts
Lógica:

Recebe evento CALL_UPLOADED

Faz STT, tokeniza e armazena texto

Gera CALL_TRANSCRIBED para o fluxo seguinte

Técnicas:

Kafka consumer + STT batch (Whisper/Deepgram)

sentiment-analyzer.processor.ts
Lógica:

Ouve CALL_TRANSCRIBED

Roda análise emocional (valência, intensidade, empatia)

Emite evento CALL_ANALYZED

Técnicas:

BERT fine-tuned para vendas

Integração com huggingface model

insights-aggregator.processor.ts
Lógica:

Junta dados de múltiplos eventos:

call, sentimento, CRM, simulação

Cria “sales insights” persistidos para dashboard

Técnicas:

OLAP aggregation

Feature engineering em batch

Push para data_science/feature.store.ts

🔐 auth/ – Estratégias de Autenticação
jwt.strategy.ts
Lógica:

Valida Authorization Bearer <token>

Gera contexto com claims: sub, tenantId, roles

jwt-refresh.strategy.ts
Lógica:

Separa a lógica de refresh token

Protege contra reuse + rotation

local.strategy.ts
Lógica:

Suporte a login por e-mail + senha

Pode evoluir para username, SSO, etc.

auth.module.ts
Lógica:

Registra todos os providers de estratégia + guards.

Provider central para módulo auth.

── tenants/ – Multitenancy + Autenticação Corporativa
tenant.entity.ts
Lógica:

Armazena os dados do tenant: nome, plano, limites, UUID, createdAt.

Define políticas de consumo (limites de simulação, chamadas, etc).

Relacionado a users, roles, permissions.

user.entity.ts
Lógica:

Representa o usuário autenticado: email, roles, tenantId.

Suporte a multi-role por tenant.

Flags: isActive, isSSO, avatarPath.

role.entity.ts + permission.entity.ts
Lógica:

Gerenciamento de papéis hierárquicos.

Ex: ADMIN, SALES_MANAGER, SDR, LEADER.

Permissions: granular RBAC (ex: can_generate_forecast, can_invite_user).

create-tenant.usecase.ts
Função:

Cria um tenant com plano default (START).

Cria admin user inicial.

invite-user.usecase.ts
Função:

Gera token de convite com expiração.

Cria entrada no banco com pending status.

Dispara e-mail automático.

assign-role.usecase.ts
Função:

Atribui ou troca role de um user específico dentro do tenant.

validate-tenant-context.usecase.ts
Função:

Middleware que impede acesso cruzado entre tenants.

tenant.repository.ts
Função:

Interface entre Prisma e os usecases.

Query por plano, domínio, ID, etc.

auth-strategy.ts
Função:

Estratégia que decodifica o JWT, carrega tenantId e roles.

✉️ integrations/ – CRM, E-mail e Calendário
salesforce.client.ts / hubspot.client.ts
Lógica:

Client REST para puxar: deals, contatos, atividades.

Mapeia campos internos com schema do CRM.

Converte dados em formato para forecasting/, calls/, automation/.

sync-opportunities.usecase.ts
Função:

Faz sync dos deals (won/lost) com enriquecimento de atributos.

Detecta campos relevantes para ML (valor, duração, status, motivo).

email.service.ts
Lógica:

Client SMTP ou API (Mailgun, SendGrid).

Suporte a envio de templates AI-driven.

send-email.usecase.ts
Função:

Recebe contexto (call, treinamento, concorrente).

Dispara e-mail automático.

calendar.service.ts + sync-events.usecase.ts
Lógica:

Integra com Google Calendar, Outlook, Zoom para pegar reuniões agendadas.

Usa para:

Agendamento de simulações

Previsão de churn

Detecção de follow-ups atrasados

📊 forecasting/ – Previsão de Receita + Saúde de Pipeline
deal.entity.ts
Lógica:

Cada deal contém: valor, etapa, data de entrada, CRMId, tempo em etapa.

Relacionado a forecastResult.

forecast-result.model.ts
Lógica:

Resultado da IA para previsão: score de fechamento, data estimada, risco.

Pode ter status: predicted, won, lost, retrained.

generate-forecast.usecase.ts
Função:

Usa features da data_science/ para prever fechamento.

Algoritmos: XGBoost, CatBoost.

Atualiza forecasts salvos.

compute-pipeline-health.usecase.ts
Função:

Calcula métricas por time e etapa:

% de deals parados

velocidade por segmento

volume vs meta

forecast.service.ts
Função:

Service de agregação.

Carrega histórico de previsão e resultados reais.

✍️ content_generation/ – Geração de Scripts e E-mails com IA
draft-email.model.ts
Lógica:

Armazena drafts gerados com IA para análise posterior.

generate-email.usecase.ts
Função:

Gera e-mail baseado em call transcrita ou simulação.

Segmenta por objetivo: follow-up, objeção, retorno.

generate-script.usecase.ts
Função:

Gera scripts de vendas para:

Pitch de produto

Resposta a concorrente

Abertura de reunião

openai.provider.ts
Função:

Abstração do SDK OpenAI.

Aceita prompt, temperatura, modelo e timeout.

🤖 automation/ – Agente Autônomo de Follow-Up
followup-task.entity.ts
Lógica:

Armazena tarefas automatizadas: tipo, status, prioridade, contexto.

Ex: send_email, create_crm_task, notify_user.

run-followups.usecase.ts
Função:

Detecta triggers (ex: concorrente citado, call sem follow-up).

Cria tarefas com base em regras de automação.

auto-followup.service.ts
Função:

Worker que executa tarefas de forma assíncrona (e-mail, CRM, Slack).

Logs e falhas persistidas por tenant.

🛠️ config/ – Configuração Centralizada
configuration.ts
Lógica:

Carrega .env e padroniza acesso a variáveis:

DB, REDIS, PORT, JWT, Kafka, OpenAI Key

validation.ts
Lógica:

Valida com Joi todos os envs necessários.

Failsafe antes de iniciar app.

environments/
Arquivos: dev.ts, prod.ts, staging.ts
Lógica:

Define overrides por ambiente.

Ex: usar Whisper local no dev e Deepgram no prod.

🧠 Documentação Oficial – Integração Avançada de IA & Data Science no SalesEdge AI
🎯 Objetivo
Explicar como e onde o módulo data_science/ atua como núcleo de predição, insights e automação inteligente, conectando todos os módulos do back-end da plataforma via chamadas diretas, eventos Kafka e inferência em tempo real.

🌐 Overview da Integração Multimodular
sql
Copiar
Editar
calls/ → data_science/feature.store.ts → prediction.engine.ts → forecasting/
                                   ↘→ automation/
training/ → create-feature.usecase.ts → train-model.usecase.ts → sales_training/
crm/ → sync-opportunities.usecase.ts ↘
                                        generate-forecast.usecase.ts
automation/ → trigger → run-followups.usecase.ts ↘
                                                    generate-prediction.usecase.ts
🧠 Como a IA é Aplicada no Produto

Módulo Origem	Dados Capturados	Tipo de Feature	IA Aplicada	Resultado
calls/	Transcrição, sentimento, objeções	Texto + Áudio + Emoção	BERT, Whisper, Sentiment Classifier	Score emocional, NER concorrentes
training/	Performance por cenário	Notas + Tempo + Tipos de erro	Classificação supervisionada	Score de aprendizado, gaps técnicos
crm/	Histórico de deals	Tabular + Temporal	XGBoost, GBDT	Probabilidade de fechamento
automation/	Triggers e follow-ups pendentes	Lógica de eventos + Comportamento	Regressão logística + Heurística IA	Decisão de follow-up automático
conversation_analysis/	Objetivos, temas, tópicos	Texto + Semântico	BERTopic, OpenAI, BERT NER	Insights pós-call contextualizados
live_assistant/	Feedback em tempo real	Áudio chunked + contexto	STT + Zero-shot + Classificação IA	Sugestão de fala durante a call
reports/	Score time de vendas + heatmaps	Agregações preditivas	KMeans, Dash, Drift Detector	Relatórios preditivos & visuais
🔄 Funções do Projeto que Consumirão diretamente IA/Data Science
📞 calls/
analyze-sentiment.usecase.ts
🔁 Envia transcrição para feature.store.ts com metadados emocionais
🔁 Emite evento Kafka: CALL_ANALYZED

transcribe-call.usecase.ts
↳ Gera transcript, estrutura para vetorização textual (TF-IDF, BERT)
↳ Consumido em create-feature.usecase.ts do data_science/

🧠 conversation_analysis/
summarize-conversation.usecase.ts
↳ Usa embedding do feature.store.ts para gerar resumo contextual
↳ Pode pedir generate-prediction.usecase.ts para classificar tipo de call

🎓 sales_training/
handle-user-message.usecase.ts
🔁 IA recebe feedback de performance por token (intenção, hesitação)
🔁 Salva performance como feature para reclassificação contínua

start-simulation.usecase.ts
↳ IA adaptativa: consulta dados de aprendizado salvos em feature.store.ts para adaptar a simulação ao nível do usuário

📊 forecasting/
generate-forecast.usecase.ts
🔁 Envia requisição para prediction.engine.ts
↳ Input: features de CRM, sentiment das calls
↳ Output: probabilidade de fechamento + classificação risco

compute-pipeline-health.usecase.ts
↳ Agregação dos scores de previsão por segmento → OLAP

🤖 automation/
run-followups.usecase.ts
🔁 Trigger: “cliente negativo”, “call sem retorno”
↳ Requisição para generate-prediction.usecase.ts
↳ Se followup_score > threshold, cria followup-task.entity.ts

✍️ content_generation/
generate-email.usecase.ts
↳ Usa classificação do tipo de lead (via data_science/)
↳ Personaliza CTA, tom e estrutura do texto

🧾 reports/
generate-report.usecase.ts
🔁 Puxa histórico de logs de prediction.entity.ts
↳ Gera relatórios por tenant, por modelo, por tipo de insight
↳ Detecta drift e sugere re-treinamento via train-model.usecase.ts

⚙️ Comandos Operacionais de IA

Comando	Ação	Serviço Usado	Permissão
POST /v1/insights/predict	Inferência IA manual	data-insights.controller.ts	RBAC: can_predict
POST /v1/insights/train	Re-treinar modelo específico	train-model.usecase.ts	SUPER_ADMIN
POST /v1/insights/features	Gerar features brutas	create-feature.usecase.ts	SYSTEM
GET /v1/insights/logs	Logs de predição do tenant	prediction.entity.ts	ADMIN
GET /v1/insights/models	Lista de modelos ativos	model.registry.ts	DEVOPS
POST /v1/insights/compare-models	Avaliação A/B de modelos	prediction.engine.ts	DATA_SCIENTIST







📍 SALES EDGE AI – MAPA DE DESENVOLVIMENTO POR MÓDULO
🔬 1. Módulo: data_science/
📌 Função principal: Core de inferência, treino, versionamento e orquestração de modelos IA.

A. create-feature.usecase.ts
Centraliza a extração e transformação de dados brutos em vetores ML-ready.

Integra com fontes calls/, training/, crm/, calendar/.

Aplica pré-processamento específico por tipo: texto, áudio, categórico, numérico, temporal.

Armazena dados no feature.store.ts com versionamento e rastreabilidade (featureStoreMetadata).

Garante normalização e padronização dos dados de entrada em múltiplas etapas do pipeline.

B. train-model.usecase.ts
Responsável por treinar modelos preditivos de forma supervisionada ou semi-supervisionada.

Gera logs de métricas, hiperparâmetros, datasets e algoritmos utilizados.

Grava os modelos no model.entity.ts e registra no model.registry.ts.

Permite controle de versionamento, comparação e re-treinamento baseado em drift.

C. generate-prediction.usecase.ts
Realiza inferência em tempo real ou em batch, identificando dinamicamente o tipo de modelo necessário.

Conecta com prediction.engine.ts e retorna saída padronizada (score, classe, explicabilidade).

Usa SHAP para explicações e pode acionar eventos para automações downstream.

D. prediction.engine.ts
Orquestra todo o fluxo de inferência: input → pré-processamento → inferência → explicabilidade.

Suporta fallback automático (ex: LLMs) e otimização de performance (ONNXRuntime/TorchServe).

Gerencia carga por tenant e seleciona o modelo correto conforme contexto e versionamento.

E. feature.store.ts
Centraliza o armazenamento de features vetorizadas com suporte a múltiplas camadas: SQL, Redis, MinIO.

Permite versionamento de features, query temporal e rastreabilidade de origem (por módulo e origem).

Suporte à persistência de embeddings em vetores externos (Pinecone, Weaviate).

F. model.registry.ts
Gerencia o ciclo de vida dos modelos: status, score, algoritmos, versionamento.

Conecta com CI/CD para deploy automático e rollback.

Define as condições ideais de uso dos modelos (range de entrada, contexto).

G. data-insights.controller.ts
Exponibiliza API REST para ativação manual de predições, consulta de logs, visão de explicabilidade e re-treinamento.

Protegido por RBAC e metadados multi-tenant.

Suporte a painéis analíticos de performance e evolução dos modelos.

📈 2. Módulo: forecasting/
📌 Função principal: Previsão de fechamento de oportunidades e saúde do pipeline.

A. generate-forecast.usecase.ts
Consome features de data_science/ e CRM para gerar previsão de fechamento por deal.

Modelos aplicáveis: XGBoost, CatBoost, regressão logística, LSTM (caso temporal).

Output: score de fechamento, risco, data estimada, intervalo de confiança.

B. forecast-result.model.ts
Estrutura os resultados das predições com metadata, status (predicted, won, lost), origem e confiabilidade.

Permite rastrear a versão do modelo e qual foi o input que levou à predição.

C. compute-pipeline-health.usecase.ts
Calcula indicadores de performance por etapa, equipe e segmento.

Detecta gargalos, velocidade de deals, percentual parado, e volume projetado vs. meta.

Alimenta visualizações em reports/.

🤖 3. Módulo: automation/
📌 Função principal: Disparar ações com base em insights IA detectados em tempo real.

A. run-followups.usecase.ts
Escuta eventos (ex: cliente negativo, ausência de follow-up) e realiza chamadas de predição.

Se a predição ultrapassa o threshold de risco, dispara ações: e-mail, tarefa, alerta.

Registra cada decisão e aciona followup-task.entity.ts.

B. auto-followup.service.ts
Worker contínuo que executa tarefas automaticamente com base nas regras do run-followups.

Integra com CRMs, e-mail e Slack via webhooks ou Zapier.

Garante logs, status e reexecuções para confiabilidade.

🎯 4. Módulo: calls/
📌 Função principal: Processar, transcrever e analisar chamadas para alimentar modelos de IA.

A. transcribe-call.usecase.ts
Converte áudios em texto com Whisper ou Deepgram, aplica normalização e tokenização.

Envia transcrição para create-feature.usecase.ts com estrutura pronta para vetorização.

B. analyze-sentiment.usecase.ts
Aplica classificação emocional (valência, arousal, intenção) usando modelos fine-tuned para vendas.

Envia features emocionais para o feature.store.ts.

Emite evento CALL_ANALYZED para encadear o fluxo de insights.

📊 5. Módulo: reports/
📌 Função principal: Consolidar resultados preditivos e operacionais da IA em relatórios executivos.

A. generate-report.usecase.ts
Agrega logs de prediction.entity.ts, performance de forecasting/ e interações de training/.

Detecta problemas como drift, performance baixa por modelo ou segmento.

Sugere ações de re-treinamento automaticamente.

B. report.service.ts
Gera relatórios visuais com Dash/Plotly.

Envia via e-mail para stakeholders ou expõe no dashboard administrativo.

Segmentado por tenant, modelo, data ou tipo de insight.

📦 6. Módulo: common/ e config/
📌 Função principal: Padronizar segurança, validações, logs e observabilidade.

A. AuthGuard.ts, RolesGuard.ts
Protege todos os endpoints sensíveis de IA (predição, treino, logs).

Valida escopos como canTrain, canPredict, canCompareModels.

B. LoggingInterceptor.ts e HttpExceptionFilter.ts
Loga todas as operações IA com: timestamp, tenantId, userId, status, tempo de execução.

Envia logs para observabilidade externa (Loki, Sentry, Datadog).

C. environments/ e configuration.ts
Garante que os ambientes dev/prod tenham variáveis adequadas para execução de modelos IA, memória, GPUs, etc.

Validação de variáveis obrigatórias com fallback.

🔄 Fluxo Multimodular Esperado (Resumo)
text
Copiar
Editar
calls/ → create-feature → feature.store → train-model OR generate-prediction
training/ → create-feature → feature.store → train-model → sales_training/
crm/ → sync-opportunities → create-feature → generate-prediction → forecasting/
automation/ → trigger → generate-prediction → run-followups
🧱 Padrões de Desenvolvimento por File

File	Tipo	Responsabilidade
*.entity.ts	Domain	Modelagem de dados e estrutura central
*.usecase.ts	Application	Core lógico da funcionalidade
*.service.ts	Infra	Conexão externa com IA, ML, APIs ou file systems
*.controller.ts	Interface	Exposição REST da funcionalidade com validação
*.processor.ts	Worker	Execução assíncrona via Kafka
*.dto.ts	Contracts	Tipagem clara da comunicação entre camadas
*.schema.json	Contract	Padronização de payloads entre módulos IA








💎 PITCH 1 – "Vendas Inteligentes como Serviço"
Automatize, preveja e vença com IA nativa.

🧩 Resumo Comercial
SalesEdge AI é uma plataforma de inteligência preditiva que transforma seu time comercial em uma máquina de conversão. Nossa IA analisa calls, CRM, comportamento de clientes e simulações de vendas para gerar ações automáticas, insights contextuais e previsões com confiança estatística.

Imagine seu vendedor recebendo sugestões em tempo real, seu gestor visualizando quem vai bater meta, e seu CRM sendo atualizado automaticamente com o próximo follow-up — tudo isso sem scripts ou prompts manuais. Só resultados.

📦 Planos Comerciais
🟢 STARTER – Para Pequenas Empresas (até 10 vendedores)
💰 A partir de R$ 349/mês

Ideal para startups e negócios locais que querem parar de perder leads e entender por que alguns vendedores convertem mais.

Inclui:
🔹 Transcrição de até 200 calls/mês com análise de emoção (Whisper + BERT)

🔹 Previsão de fechamento de oportunidades com IA (até 500 deals/mês)

🔹 Score de performance do time comercial (calls + CRM)

🔹 Geração automática de e-mails follow-up com IA

🔹 Relatórios mensais de performance

🔐 RBAC por usuário + dashboard com insights visuais

🎯 Benefício direto: aumento de até 28% na conversão de leads com base nos dados de clientes atuais.

🟡 GROWTH – Para Médias Empresas (até 50 vendedores)
💰 A partir de R$ 1.490/mês

Para empresas que têm um processo comercial rodando, mas querem escalar com inteligência, reduzir CAC e ter previsibilidade real de receita.

Inclui tudo do STARTER, e mais:
🔹 Forecasting avançado por segmento com LSTM + XGBoost

🔹 Simulações de vendas com IA generativa (avatar + feedback)

🔹 Detecção de concorrentes em calls e battlecards automáticos

🔹 Automação de follow-ups baseada em comportamento do lead

🔹 Integrações com Hubspot, Salesforce e calendários (Google/Outlook)

🔹 Treinamento de modelos customizados por setor

🔐 Controle granular por equipe, região, canal ou segmento

🎯 Benefício direto: times comerciais com até 40% mais engajamento e menor churn nos ciclos de venda.

🔵 ENTERPRISE – Para Grupos, Franquias e Grandes Times (100+ vendedores)
💰 Sob Consulta (Custom Onboarding + Infra dedicada)

Projetado para operações complexas, multi-unidade, multi-linguagem ou com estruturas internacionais. Solução completa com cluster de IA dedicado.

Inclui tudo dos planos anteriores, e mais:
🔹 Orquestração de modelos por tenant, região e produto

🔹 Re-treinamento automático via detecção de drift

🔹 STT streaming + feedback IA em tempo real (assistente ao vivo)

🔹 A/B testing de modelos preditivos com fallback de LLMs

🔹 Exportação de dados para dashboards personalizados (via API, Kafka ou Parquet)

🔹 Pipeline CI/CD para deploy de novos modelos e fine-tunings

🔐 Single Sign-On (SSO), autenticação corporativa e trilha de auditoria full (LGPD/GDPR)

🎯 Benefício direto: previsibilidade de receita + otimização de squad por tipo de cliente + IA autônoma aprendendo com seu negócio.

🌐 Integrações Nativas

CRM	IA e NLP	Automação	Observabilidade
Hubspot	Whisper STT	Zapier	Grafana + Loki
Salesforce	BERT, OpenAI	Webhooks nativos	Sentry + Prometheus
Pipedrive	SHAP, XGBoost	Slack + E-mail	MLflow + ArgoCD
⚙️ Por que a SalesEdge AI é única?
✅ IA nativa e integrada — não é plugin. É core.

✅ Infra escalável por tenant com cache inteligente, embeddings versionados e deploy contínuo.

✅ Previsões que explicam por que uma venda acontece (ou não).

✅ Um ecossistema multimodular de IA, pronto para interagir com CRM, voz, e-mail, simulação e automações.

💥 PITCH 2 – “IA que realmente fecha vendas”
De vendedores medianos a squads de elite.

🧠 A dor que resolvemos:
Seu time gasta tempo com leads ruins.
Seu gestor toma decisão no achismo.
Seu forecast nunca bate.
Seu CRM está desatualizado.
Seu vendedor top não consegue ser replicado.

SalesEdge AI resolve tudo isso com um único sistema.

🚀 O que o cliente vê em 30 dias:
📈 Crescimento de 25–40% no volume de follow-ups eficazes

📊 Forecast com +90% de acurácia no pipeline

🧠 Vendedores recebendo recomendações em tempo real

✍️ E-mails escritos automaticamente pela IA com base no tom da call

🏋️ Simulações com IA que treinam o time todo com feedback sob demanda

🧱 O que está por trás:
🔍 Central de features vetorizadas por áudio, texto, sentimento, comportamento

🧬 ML pipelines com pré-processamento automático e explicabilidade via SHAP

🎛️ MLflow e Optuna integrados no ciclo de treino/avaliação

🧠 Fallback inteligente: se LLM falhar, um modelo local assume

🔁 Kafka Events + Redis + MinIO para orquestração assíncrona

✨ Extras para atrair CTOs, CPOs e VPs de Vendas:
💼 Pode rodar em nuvem privada ou on-premises

⚖️ Cumpre LGPD/GDPR com logs, versionamento e consent tracking

⚙️ Suporte Enterprise a CI/CD, monitoração de modelos e rollback

📊 Acesso a relatórios preditivos semanais automáticos

🧠 Painel para comparar modelos com drift, acurácia e feedbacks de uso

📣 Frase Final do Pitch
"SalesEdge AI é a evolução natural da sua área de vendas: com menos achismo, mais dados e IA trabalhando 24h pelo seu faturamento. Sua equipe não vende mais sozinha — agora tem um copiloto treinado com bilhões de parâmetros."




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
        🧨 PITCH ULTRA-RENTÁVEL DO SALES EDGE AI
💡 “O segredo para escalar vendas não é contratar mais SDRs. É fazer com que os que você já tem se tornem 10x melhores.”
🎯 O Que é o SalesEdge AI?
SalesEdge AI é uma plataforma de inteligência de vendas com IA generativa que transforma cada ligação, objeção e concorrente em oportunidade de treinamento real-time, resposta automatizada e decisão baseada em dados.

Você nunca mais vai perder uma negociação por estar despreparado.

🔥 Por que Empresas Estão Migrando para o SalesEdge AI?

Concorrente	Falha Principal	O que o SalesEdge AI faz melhor
Gong.io	Insights bons, mas nada actionable	Sugestões com IA em tempo real + follow-up automático
Chorus.ai	Foco apenas em gravação + análise retro	Simulação ativa + Battlecards IA + IA live assistant
Lessonly + ZoomInfo	Fragmentação de sistemas	Tudo em um só lugar: treino, gravação, comparação e automação
Second Nature.ai	Simulador bom, mas sem contexto de calls	IA aprende com calls reais e simula baseado em dados reais
🧠 Recursos Chave (Tudo num só stack)
Gravação & Transcrição com IA (Zoom, Teams)

Análise de Sentimento + Competitividade

Simulador IA com Avatar Realista (Web/VR)

Battlecards Dinâmicos com IA

Automação de Follow-Up

Forecast + Detecção de Deals em Risco

Gamificação do Treinamento de Vendas

Integração com CRMs + Calendários + Email

💰 Modelo de Preço (Favorável ao Cliente + Receita Escalável)
🎓 Plano Growth (Ideal para Times de 5 a 20)
US$ 999/mês

200h de simulação

1 avatar personalizado

5 integrações (CRM, Zoom, etc)

50 Battlecards ativos

Acesso à API de insights

🏢 Plano Enterprise
US$ 5.000/mês + consumo

Treinamento ilimitado

Até 10 avatares por segmento

Acesso a simulação VR

Conectores customizados (Siebel, SAP)

SLA dedicado + onboarding

API para LMS + SSO + SCIM

🧾 Pay-As-You-Go (Modelo Híbrido para Upsell)
$0.15 por minuto de simulação extra

$0.25 por análise completa de call

2% de fee sobre upsell detectado por IA

📈 Resultados Esperados para o Cliente
+32% de conversões em ciclos longos
-41% de ramp-up de novos vendedores
+3.2M em upsell anual mapeado por IA (base de dados piloto em SaaS B2B)

🚀 Benefícios Comerciais Diretos
Redução de churn por underperformance

Time de vendas treinado automaticamente

Diagnóstico automatizado de concorrência

Detecção de risco nas negociações em tempo real

Suporte à decisão com dados + feedback gamificado

🧲 Call to Action Comercial
“Quer descobrir exatamente por que seu time perde para o maior concorrente?”

Suba sua última gravação de call e receba um Raio-X de Objeções, Emoções e Gatilhos de Decisão, feito por IA.

🔗 [Agende Sua Análise de Call Grátis] (Integração Typeform + Calendly)

📍 Estratégia de Go-To-Market
🧠 Canais Prioritários
Outbound Sales com Battlecards

Parcerias com Consultorias RevOps

Marketplaces de CRM (Salesforce AppExchange, HubSpot Marketplace)

Eventos de Vendas e Enablement

⚔️ Armas de Conversão
Demonstração com avatar ao vivo (Unreal/3D)

Dashboard com dados reais de concorrência

ROI Simulator: "Quanto você está perdendo por não usar IA?"

🧩 Stack Favorável para Escala
Infra: AWS + Redis + Kafka

Arquitetura: Clean + Multi-tenant + Resiliente

Observabilidade: Prometheus + Sentry + Loki

SDK IA: OpenAI, Whisper, Langchain

Deploy Front: Vercel + Remote Cache Turborepo

Seg: JWT, RBAC, Anonimização de PII

📊 Benchmarks do Mercado

Produto	MRR médio por cliente	Modelo de Preço
Gong.io	$30K+	Licença anual por seat
Second Nature.ai	$10K - $50K	Treinamento customizado
SalesLoft + ZoomInfo	$12K - $60K	Empacotado por funções
SalesEdge AI mira entre $12K e $120K/ano, com modelo híbrido que gera recorrência + receita transacional inteligente.

🎤 Final Brutal
"Seu time não precisa de mais scripts. Precisa de simulações reais, insights em tempo real e uma IA que treina, corrige e vence com eles."

Deixe o SalesEdge AI mostrar onde cada call vira uma aula, cada objeção vira argumento, e cada concorrente... vira estatística no dashboard.

💸 Planos do SalesEdge AI – Inteligência Comercial Escalável
“Seus vendedores não precisam de mais leads. Eles precisam de um espelho que mostre onde estão errando, e uma IA que ensine como virar o jogo.”

Todos os planos incluem:

IA generativa treinada para vendas complexas B2B

Battlecards inteligentes atualizados com base nas calls reais

Análise de sentimento e performance por vendedor

Transcrição de chamadas com insights prontos para ação

Simulações realistas com avatares treináveis (voz e texto)

👶 Plano START – R$ 990/mês
👥 Para times de até 5 vendedores

100 minutos/mês de simulação com IA

10 transcrições de chamadas com análise por mês

10 battlecards dinâmicos

Integração com Zoom ou Teams

Acesso à Central de Relatórios de Uso

Suporte via e-mail

🔓 Ideal para: Startups, squads de vendas iniciais, agências B2B

🚀 Plano GROWTH – R$ 4.990/mês
👥 Para equipes entre 5 e 20 vendedores

200 horas/mês de simulação com IA (voz + texto)

50 battlecards customizáveis

5 integrações nativas (CRM, Zoom, e-mail, calendários)

1 avatar personalizado (voz e comportamento)

Dashboard de performance por SDR/closer

API de insights (para conectar com Notion, Slack, etc)

Suporte em horário comercial

🎯 Recomendado para: SaaS, edtechs, fintechs em fase de tração

🏢 Plano ENTERPRISE – R$ 24.900/mês + consumo
👥 Para times comerciais grandes ou enterprise (20+)

Simulações ilimitadas com IA + feedback em tempo real

Até 10 avatares por persona/segmento de cliente

Acesso completo a simulação VR (componente 3D Web ou Unreal Engine via browser)

Conectores customizados (SAP, Siebel, Totvs, etc)

Integração via SSO, SCIM, e APIs de LMS

SLA de 99,9% com onboarding dedicado

Central de performance com ranking e análise gamificada

Dashboard BI-ready (Power BI, Tableau)

📌 Inclui: 10.000 minutos/mês em simulação + transcrição
📞 Adicional: R$ 0,79/minuto acima do pacote

🏦 Ideal para: Bancos, big techs, grupos educacionais, telecoms

🔄 Plano FLEX (Sob Demanda – Pay-As-You-Go)
🔹 R$ 0,99/minuto de simulação IA (voz ou texto)
🔹 R$ 1,49 por análise completa de call com emoção + objeção
🔹 2% de fee sobre upsell gerado com ajuda da IA (opcional e rastreado)

💼 Perfeito para: Consultorias, vendas pontuais, uso em pitch de alto valor

📊 Comparativo Visual

Feature	START	GROWTH	ENTERPRISE	FLEX
Transcrição com IA	✅ 10/m	✅ 200/m	✅ ilimitada	✅ por uso
Simulador com avatar	❌	✅	✅ avançado	✅
Battlecards inteligentes	✅ 10	✅ 50	✅ ilimitados	✅ por token
Relatórios de performance	Básico	Completo	Avançado (BI)	Simples
Avatares customizáveis	❌	1	Até 10	❌
Suporte	E-mail	Comercial	SLA e dedicado	Chat/e-mail
Integrações (Zoom, CRM etc)	1	5	ilimitadas	via API
🧠 Como Justificamos o ROI (e Vendemos por 10x Mais que o Custo)
🧾 Um vendedor treinado pela IA do SalesEdge fecha 2 a 5 deals a mais por mês com ticket médio acima de R$ 10 mil. O plano se paga no segundo negócio fechado, e o lucro é todo seu.

Custo de ramp-up reduzido em até 41%

Conversões aumentadas em até 32%

Menor rotatividade de vendedores

Melhor produtividade do time de Sales Enablement

🔥 Ofertas Limitadas de Lançamento (por tempo limitado)
✅ GRÁTIS: 30 minutos de simulação com IA + relatório de objeções
✅ GRÁTIS: 1 battlecard gerado com base na última call
✅ Desconto de 20% nos 3 primeiros meses (para quem fechar até o final do trimestre)

📩 [Agende sua análise de call gratuita e veja a IA em ação]
(Integração com Typeform + Calendly)

💬 Final Poderoso
“Não venda mais. Venda melhor. Cada call com o SalesEdge AI é um espelho. Um treinador. Um radar de concorrência. Um multiplicador de receita.”