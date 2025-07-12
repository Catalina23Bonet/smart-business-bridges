

import { ArrowRight, BarChart3, FileText, Database, Zap, MessageSquare, Mail, User, GraduationCap } from "lucide-react";
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
    window.open('https://wa.me/59891243546?text=Hola! Me interesa conocer más sobre tus servicios de automatización', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Catalina Bonet</h1>
                <p className="text-sm text-gray-600">Ingeniera de Producción</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <GraduationCap className="h-4 w-4" />
              <span>Universidad de la República</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-8 bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
              🚀 Soluciones de automatización profesionales
            </Badge>
            <h1 className="mb-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Automatizá tus procesos
              </span>
              <br />
              <span className="text-gray-900">y tomá decisiones con datos</span>
            </h1>
            <p className="mb-6 text-xl text-gray-700 sm:text-2xl max-w-4xl mx-auto leading-relaxed">
              Te ayudo a ahorrar tiempo y mejorar resultados con soluciones a medida en Python, BigQuery y dashboards.
            </p>
            <p className="mb-12 text-lg text-gray-600 max-w-3xl mx-auto">
              Servicios de automatización, dashboards en tiempo real, scraping, APIs y más.
            </p>
            <Button 
              onClick={handleContactClick}
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-6 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:scale-105 rounded-xl"
            >
              Quiero una solución para mi negocio
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Productos y servicios que ofrezco
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elegí la solución que mejor se adapte a las necesidades de tu negocio
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] rounded-2xl"
              >
                {service.badge && (
                  <Badge className="absolute right-6 top-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-sm font-medium">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5 pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-800 flex items-center">
                        <span className="mr-2">💡</span> Ideal para:
                      </h4>
                      <p className="text-gray-600 ml-6">{service.ideal}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-800 flex items-center">
                        <span className="mr-2">✅</span> Qué incluye:
                      </h4>
                      <p className="text-gray-600 ml-6">{service.includes}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-800 flex items-center">
                        <span className="mr-2">📦</span> Entrega:
                      </h4>
                      <p className="text-gray-600 ml-6">{service.delivery}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-800 flex items-center">
                        <span className="mr-2">⏱️</span> Tiempo:
                      </h4>
                      <p className="font-semibold text-blue-600 ml-6">{service.time}</p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleContactClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg py-3 rounded-xl font-medium"
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
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center sm:p-16">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <MessageSquare className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold sm:text-4xl">
                ¿No sabés cuál elegir?
              </h3>
              <p className="mb-10 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Escribime y lo vemos juntos. Te ayudo a encontrar la solución perfecta para tu negocio.
              </p>
              <Button 
                onClick={handleContactClick}
                size="lg" 
                variant="secondary" 
                className="group bg-white px-10 py-6 text-lg font-semibold text-blue-600 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105 rounded-xl"
              >
                <Mail className="mr-3 h-6 w-6" />
                Contactar ahora
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
                <User className="h-6 w-6 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900">Catalina Bonet</h3>
                <p className="text-gray-600">Ingeniera de Producción</p>
                <p className="text-sm text-gray-500">Universidad de la República</p>
              </div>
            </div>
            <div className="text-center text-gray-600">
              <p className="font-medium">© 2024 - Servicios de Automatización y Análisis de Datos</p>
              <p className="mt-2 text-sm">Soluciones profesionales en Python, BigQuery y Business Intelligence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

