import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

import { CopyEmailButton } from "@/components/copy-email-button";
import { getSiteContent } from "@/lib/site-content";

export async function ContactInfo() {
  const { contactEmail, contactLocation, contactPhone, socials } =
    await getSiteContent();
  const phoneHref = `tel:${contactPhone.replace(/[^+\d]/g, "")}`;

  return (
    <div className="flex w-full flex-col gap-6 lg:w-[440px] lg:shrink-0">
      <div className="flex w-full flex-col gap-5">
        <p className="font-mono text-2xl font-bold text-foreground">
          DIRECT CONTACT
        </p>

        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full flex-col gap-3 rounded-xl bg-card p-6">
            <div className="flex items-center gap-2">
              <Mail className="size-4 text-muted-foreground" />
              <p className="font-mono text-xs font-bold text-muted-foreground">
                EMAIL
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-lg font-bold break-words text-foreground">
                {contactEmail}
              </p>
              <CopyEmailButton email={contactEmail} />
            </div>
          </div>

          <a
            href={phoneHref}
            className="flex w-full flex-col gap-3 rounded-xl bg-card p-6"
          >
            <div className="flex items-center gap-2">
              <Phone className="size-4 text-muted-foreground" />
              <p className="font-mono text-xs font-bold text-muted-foreground">
                PHONE
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-lg font-bold text-foreground">
                {contactPhone}
              </p>
              <span className="flex items-center gap-1 pt-1 font-mono text-[13px] font-semibold text-brand">
                Call Me
                <ArrowUpRight className="size-3" />
              </span>
            </div>
          </a>

          <div className="flex w-full flex-col gap-3 rounded-xl bg-card p-6">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-muted-foreground" />
              <p className="font-mono text-xs font-bold text-muted-foreground">
                LOCATION
              </p>
            </div>
            <p className="font-mono text-lg font-bold text-foreground">
              {contactLocation}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 rounded-xl bg-card p-6">
        <p className="font-mono text-sm font-bold tracking-[1px] text-muted-foreground">
          CONNECT / SOCIALS
        </p>
        <div className="flex w-full flex-col gap-3">
          {socials.map((social) => {
            const isTel = social.href.startsWith("tel:");
            return (
              <a
                key={social.label}
                href={social.href}
                target={isTel ? undefined : "_blank"}
                rel={isTel ? undefined : "noopener noreferrer"}
                className="group flex w-full items-center justify-between text-base text-foreground-secondary hover:text-foreground"
              >
                {social.label}
                <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
