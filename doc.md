🔥📘 DOCUMENTAÇÃO BRUTALMENTE EXTENSA – BACK-END DO SALES EDGE AI (Enterprise, Multi-Tenant, LLM, Data-Driven, AI-Ready)
Arquiteto-level • Clean Architecture • Pronto para Auditoria, Fundraising e Escala Mundial

🧠 Visão Técnica Profunda
O SalesEdge AI é uma plataforma back-end construída com:

NestJS (Arquitetura modular, escalável)

Prisma ORM (PostgreSQL)

Kafka (Streaming + Eventos)

OpenAI / Whisper / PyTorch / MLFlow (IA Generativa e Analítica)

RBAC + JWT (Segurança e escopos multi-tenant)

Clean Architecture (Separação brutal por camadas)

Módulo dedicado de Data Science (feature store, model serving, fine-tuning)

WebSocket e Workers (Realtime IA + automação)

📦 Organização da Stack (Arquitetura de Domínios)
Cada domínio segue:

pgsql
Copiar
Editar
domain/ → application/ → infrastructure/ → controllers/
Todos os módulos injetáveis são gerenciados via @Module do NestJS.

🧰 MAPA GERAL DAS FUNÇÕES – FILE POR FILE, COM TÉCNICAS USADAS
✅ tenants/ – Multitenancy + Identidade + Roles

📄 Arquivo	⚙️ Função	🧠 Técnicas / Lógica
create-tenant.usecase.ts	Criação de tenant com roles default	Verifica schema + cria registros default no PostgreSQL
invite-user.usecase.ts	Geração de token de convite via JWT	Geração assinada e expirada (JWT + UUID)
assign-role.usecase.ts	Atribuição de roles com escopo	RBAC + verificação contextual por tenantId
validate-tenant-context.usecase.ts	Contexto multi-tenant com guard	Interceptor que valida e insere req.tenantId
auth-strategy.ts	Estratégia JWT	Extensão da PassportStrategy com payload customizado
tenants.controller.ts	RESTful: /v1/tenants	Exposição segura de endpoints multi-tenant
✉️ integrations/ – Conectores CRM, Email, Calendário
📁 CRM

📄 Arquivo	⚙️ Função	🧠 Técnicas
salesforce.client.ts	Conector REST Salesforce	OAuth2 + throttling com retry
hubspot.client.ts	Conector REST HubSpot	OAuth2 + transformação de payload
sync-opportunities.usecase.ts	ETL de oportunidades	Job assíncrono + mapeamento para deal.entity.ts
📁 Email

📄 Arquivo	⚙️ Função	🧠 Técnicas
email.service.ts	Envio de e-mails	Nodemailer ou AWS SES + logs via Kafka
send-email.usecase.ts	Pipeline IA → Email → Envio	openai.provider.ts + template engine
📁 Calendar

📄 Arquivo	⚙️ Função	🧠 Técnicas
calendar.service.ts	Sincronização com Google Calendar	OAuth2 + conversão de eventos
sync-events.usecase.ts	Linkar calls com reuniões futuras	Redis para deduplicação + schedule cron job
📊 forecasting/ – Previsão de Receita + Funil de Vendas

📄 Arquivo	⚙️ Função	🧠 Técnicas
generate-forecast.usecase.ts	Previsão com modelo IA	Integra com data_science/prediction.engine.ts via injeção
compute-pipeline-health.usecase.ts	Score de funil	Lógica de score baseado em velocity, taxa de conversão, NPS
forecast.service.ts	Serviços utilitários + métricas	Agregações SQL + séries temporais
✍️ content_generation/ – IA para Geração de Conteúdo

📄 Arquivo	⚙️ Função	🧠 Técnicas
generate-email.usecase.ts	Prompt → Texto de e-mail	Langchain prompt + OpenAI + fine-tuning
generate-script.usecase.ts	Geração de script de vendas	Treinamento com dados de pitch + persona
openai.provider.ts	Abstração da OpenAI API	Geração com temperatura dinâmica + fallback
🤖 automation/ – Follow-ups Inteligentes

📄 Arquivo	⚙️ Função	🧠 Técnicas
run-followups.usecase.ts	Agente de decisão baseado em triggers	Regra + IA híbrida (Random Forest + heurísticas)
auto-followup.service.ts	Execução agendada	Redis Scheduler + reações baseadas em gatilhos
followup-task.entity.ts	Domínio	Task com status, prioridade e ID por tenant
📞 calls/ – Processamento e Transcrição de Áudio

📄 Arquivo	⚙️ Função	🧠 Técnicas
transcribe-call.usecase.ts	Upload e transcrição	Kafka Event → Whisper/Deepgram Pipeline
analyze-sentiment.usecase.ts	Sentimento por bloco	BERT ou DistilBERT + chunks via PyTorch
speech-to-text.service.ts	STT provider	Detecção automática de idioma + fallback
sentiment-model.service.ts	Modelo fine-tuned	Tensorflow + audio embeddings
🧠 conversation_analysis/ – Insights e Sumário Pós-Call

📄 Arquivo	⚙️ Função	🧠 Técnicas
summarize-conversation.usecase.ts	Resumo via LLM	Prompt dinâmico com highlights da call
whisper.service.ts	Pós-processamento de transcrição	Separação de tópicos, emoção e tempo por orador
🔴 live_assistant/ – IA em Tempo Real via WebSocket

📄 Arquivo	⚙️ Função	🧠 Técnicas
process-live-audio.usecase.ts	Stream → Ação	Chunks de voz → STT → NLP prompt → Sugestão
streaming-stt.service.ts	Transcrição streaming	WebSocket server + Redis cache de contexto
liveassist.gateway.ts	WS listener	Transcrição + resposta com latência <500ms
🎓 sales_training/ – Simulador de Treinamento com IA

📄 Arquivo	⚙️ Função	🧠 Técnicas
start-simulation.usecase.ts	Start de simulação com cenário/avatares	Template dinâmico + sessão por UUID
handle-user-message.usecase.ts	Interação com o avatar	Langchain + context-aware prompting
ai-chat.service.ts	Orquestração IA	Resposta simulada baseada em persona, tempo, emoção
🧬 data_science/ – Feature Store + IA Preditiva

📄 Arquivo	⚙️ Função	🧠 Técnicas
create-feature.usecase.ts	Prepara features de transcrição e venda	Limpeza + normalização + vectorization
train-model.usecase.ts	Treinamento com histórico	MLFlow + CatBoost + monitoramento de métricas
generate-prediction.usecase.ts	Predição real-time	Endpoint de previsão (XGBoost / LSTM)
feature.store.ts	Armazenamento intermediário	Redis + SQLite para cache
prediction.engine.ts	Orquestrador de modelo	Serve modelos REST ou embutido via PythonBridge
🧠 competitive_intelligence/ – Detecção de Concorrência

📄 Arquivo	⚙️ Função	🧠 Técnicas
detect-competitors.usecase.ts	Detecta concorrentes na call	NER via spaCy + count vectorizer
ner.service.ts	Named Entity Recognition	Modelo próprio com heurística + fallback GPT
💸 billing/ – Pagamento e Webhooks

📄 Arquivo	⚙️ Função	🧠 Técnicas
billing.service.ts	Plano, consumo e cobrança	Cálculo por tenant + Pay-Per-Use
webhook.handler.ts	Resposta a Stripe/Paddle	Verificação de assinatura + atualizações de plano
📑 reports/ – Relatórios e Métricas

📄 Arquivo	⚙️ Função	🧠 Técnicas
generate-report.usecase.ts	Geração de relatórios PDF/CSV	OLAP queries + compressão de dados
report.service.ts	Métricas agregadas por tenant/time	Query builder com filtros dinâmicos
🌍 Funções Globais – common/

Arquivo	Função
AuthGuard.ts	Protege rotas com JWT e contexto
RolesGuard.ts	RBAC contextual por função
LoggingInterceptor.ts	Log global com tempo de resposta
TimeoutInterceptor.ts	Timeout automático para requisições longas
ValidationPipe.ts	Validação baseada em DTO + class-validator
HttpExceptionFilter.ts	Tratamento padrão de erros HTTP
🧩 Integrações Externas

Serviço	Arquivo	Técnicas
Salesforce	salesforce.client.ts	API REST + OAuth2
Hubspot	hubspot.client.ts	OAuth2 + Contact Sync
Zoom	calendar.service.ts	Calendar Sync + Deal link
OpenAI	openai.provider.ts	Prompt + Retry + Fallback
MLFlow	model.registry.ts	Registry + Training History
🛡️ Segurança
JWT com Refresh Token (Auth0-style)

RBAC multi-tenant nativo

tenantId obrigatório por request

Logging + Auditoria centralizada

Criptografia AES em dados sensíveis (em breve)

Testes E2E com contexto seguro por tenant

