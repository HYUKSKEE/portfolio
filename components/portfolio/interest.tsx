import { Section } from "@/components/portfolio/section";
import { profile } from "@/data/profile";

export function Interest() {
  return (
    <Section id="interest" title="Interest">
      <p className="text-sm leading-relaxed sm:text-base">
        {profile.interest}
      </p>
    </Section>
  );
}
