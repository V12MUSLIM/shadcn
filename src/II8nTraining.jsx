import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const lngs = {
  en: { nativeName: "English", dir: "ltr" },
  ar: { nativeName: "العربية", dir: "rtl" },
};

export default function AdvancedApp() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EGP");

  // 👇 Automatically update page direction
  useEffect(() => {
    const currentLng = i18n.resolvedLanguage || "en";
    document.documentElement.dir = lngs[currentLng]?.dir || "ltr";
  }, [i18n.resolvedLanguage]);

  return (
    <div className="min-h-screen bg-gray-200 relative flex justify-center items-center">
      {/* 🌍 Language Switch Buttons */}
      <header
        className={`fixed top-4 ${
          i18n.resolvedLanguage === "ar"
            ? "right-4 flex-row-reverse"
            : "left-4"
        } flex gap-4`}
      >
        {Object.keys(lngs).map((lng) => (
          <Button
            variant="stone"
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            onClick={() => {
              i18n.changeLanguage(lng);
              setCounter(count + 1);
            }}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </header>

      {/* 💱 Currency Converter Card */}
      <main className="bg-white rounded-md shadow-md p-10 w-[350px] text-center">
        <h1 className="text-2xl font-semibold mb-10">{t("title")}</h1>

        <div
          className={`flex flex-col gap-4 ${
            i18n.resolvedLanguage === "ar" ? "items-end" : "items-start"
          }`}
        >
          {/* From Label */}
          <Label className="flex items-center gap-2">
            {t("Label1")}:
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 font-bold"
                >
                  {fromCurrency}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-gray-800 shadow-md">
                {["USD", "EUR", "EGP"].map((cur) => (
                  <DropdownMenuItem
                    key={cur}
                    className="hover:bg-gray-100"
                    onClick={() => setFromCurrency(cur)}
                  >
                    {cur}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </Label>

          <Input
            type="text"
            className={`w-full ${
              i18n.resolvedLanguage === "ar" ? "text-right" : "text-left"
            }`}
          />

          {/* To Label */}
          <Label className="flex items-center gap-2">
            {t("Label2")}:
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 font-bold"
                >
                  {toCurrency}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-gray-800 shadow-md">
                {["USD", "EUR", "EGP"].map((cur) => (
                  <DropdownMenuItem
                    key={cur}
                    className="hover:bg-gray-100"
                    onClick={() => setToCurrency(cur)}
                  >
                    {cur}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </Label>

          <Input
            type="text"
            className={`w-full ${
              i18n.resolvedLanguage === "ar" ? "text-right" : "text-left"
            }`}
          />
        </div>
      </main>
    </div>
  );
}
