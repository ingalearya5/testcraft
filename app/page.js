import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, PenTool, Download, ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId != null) {
    redirect("/home");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="text-center py-20 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-500">
              Craft Your
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500">
              Perfect Test
            </span>
          </h1>
          <p className="mt-3 text-xl text-gray-600 sm:mt-5 sm:text-2xl max-w-xl mx-auto">
            Create engaging, personalized tests with the power of AI at your
            fingertips.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Button
              asChild
              className="group text-lg px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <SignInButton>
                <div className="flex items-center">
                  Start Crafting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </SignInButton>
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-3 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/80 backdrop-blur-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Empower Your Test Creation
              <span className="block text-blue-600">with TestCraft</span>
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "AI-Powered Creativity",
                description:
                  "Harness the power of artificial intelligence to generate unique and engaging test questions tailored to your specific subject matter and difficulty level, saving you time and enhancing the quality of your assessments.",
              },
              {
                icon: PenTool,
                title: "Flexible Customization",
                description:
                  "Design your perfect test with our intuitive interface, offering a wide variety of question types, formatting options, and customizable templates to ensure your assessments perfectly align with your educational objectives and teaching style.",
              },
              {
                icon: Download,
                title: "Instant Downloads",
                description:
                  "Streamline your workflow with our quick PDF generation and download feature, allowing you to create, edit, and distribute professional-quality tests in seconds, complete with answer keys and customizable layouts for immediate use.",
              },
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-xl h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
