
import { ArrowRight, BarChart3, FileText, Database, Zap, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Dashboard de resultados en tiempo real",
      description: "Mirá todos los números importantes de tu negocio en una sola pantalla.",
      ideal: "empresas que invierten en publicidad online o tienen muchos datos",
      includes: "conexión a GA4, Meta Ads, Google Sheets o CRM, diseño de un panel visual fácil de usar",
      delivery: "un link online al dashboard actualizado automáticamente",
      time: "1–2 semanas",
      badge: "Más popular"
    },
    {
      icon: FileText,
      title: "Reporte automático en Excel o PDF",
      description: "Recibí cada semana o mes un archivo con los datos que necesitás, sin hacer nada.",
      ideal: "agencias, e-commerce, empresas que analizan reportes periódicamente",
      includes: "script que toma los datos (publicidad, ventas, etc.) y genera un reporte listo para enviar o presentar",
      delivery: "por email o Google Drive, en el formato que prefieras",
      time: "1 semana"
    },
    {
      icon: Database,
      title: "Organización de base de datos de clientes",
      description: "Dejá de tener tu base de datos desordenada. Te la limpio, organizo y actualizo.",
      ideal: "empresas que tienen formularios, listas, mails, Excel y necesitan consolidar datos",
      includes: "limpieza, unificación de archivos, categorización por interés, ubicación, historial, etc.",
      delivery: "un Excel limpio, con filtros y recomendaciones",
      time: "3 a 5 días"
    },
    {
      icon: Zap,
      title: "Sistema para registrar ventas o leads",
      description: "Automatizá el registro de ventas, consultas o formularios en una planilla sin tocar nada.",
      ideal: "personas o negocios que venden por Instagram, WhatsApp, formulario web o email",
      includes: "conexión con tu canal de venta, creación de una planilla automática y alertas si querés",
      delivery: "sistema funcionando y configurado",
      time: "3 días"
    }
  ];

  const handleContactClick = () => {
    window.open('https://wa.me/5491234567890?text=Hola! Me interesa conocer más sobre tus servicios de automatización', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              🚀 Soluciones de automatización
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Automatizá tus procesos
              </span>
              <br />
              y tomá decisiones con datos
            </h1>
            <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
              Te ayudo a ahorrar tiempo y mejorar resultados con soluciones a medida en Python, BigQuery y dashboards.
            </p>
            <p className="mb-10 text-lg text-gray-500">
              Servicios de automatización, dashboards en tiempo real, scraping, APIs y más.
            </p>
            <Button 
              onClick={handleContactClick}
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:scale-105"
            >
              Quiero una solución para mi negocio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Productos y servicios que ofrezco
            </h2>
            <p className="text-lg text-gray-600">
              Elegí la solución que mejor se adapte a las necesidades de tu negocio
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                {service.badge && (
                  <Badge className="absolute right-4 top-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-800">💡 Ideal para:</h4>
                    <p className="text-gray-600">{service.ideal}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-800">✅ Qué incluye:</h4>
                    <p className="text-gray-600">{service.includes}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-800">📦 Entrega:</h4>
                    <p className="text-gray-600">{service.delivery}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-800">⏱️ Tiempo:</h4>
                    <p className="font-medium text-blue-600">{service.time}</p>
                  </div>
                  <Button 
                    onClick={handleContactClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                  >
                    Solicitar este servicio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-2xl">
            <CardContent className="p-8 text-center sm:p-12">
              <MessageSquare className="mx-auto mb-6 h-16 w-16 text-white/90" />
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                ¿No sabés cuál elegir?
              </h3>
              <p className="mb-8 text-lg text-white/90">
                Escribime y lo vemos juntos. Te ayudo a encontrar la solución perfecta para tu negocio.
              </p>
              <Button 
                onClick={handleContactClick}
                size="lg" 
                variant="secondary" 
                className="group bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contactar ahora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-gray-600">
          <p>© 2024 - Servicios de Automatización y Análisis de Datos</p>
          <p className="mt-2 text-sm">Soluciones profesionales en Python, BigQuery y Business Intelligence</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
