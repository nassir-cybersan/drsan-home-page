import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PatientMobile } from "@/components/landing/PatientMobile";
import { HealthCardSection } from "@/components/landing/HealthCardSection";
import { CardJourneySection } from "@/components/landing/CardJourneySection";
import { HospitalDashboardPreview } from "@/components/landing/HospitalDashboardPreview";
import { AppDownloadSection } from "@/components/landing/AppDownloadSection";
import { EmergencySection } from "@/components/landing/EmergencySection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <PatientMobile />
        <HealthCardSection />
        <CardJourneySection />
        <HospitalDashboardPreview />
        <AppDownloadSection />
        <EmergencySection />
      </main>
      <Footer />
    </div>
  );
}
