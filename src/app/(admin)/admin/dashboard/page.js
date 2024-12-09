import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Bar, BarChart } from "recharts"
import { AnalyticsChart } from "@/components/ui/BarChart/BarChart";


export default function dashboard() {
  return (
    <div className="screen-full">
      <AnalyticsChart/>
    </div>
        
  );
}