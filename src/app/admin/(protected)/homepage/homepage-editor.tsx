"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/app/admin/_components/section";
import { Field } from "@/app/admin/_components/form-fields";
import { RepeatingFieldList } from "@/app/admin/_components/repeating-field-list";
import { ImageUploadField } from "@/app/admin/_components/image-upload-field";
import { SaveBar, type SaveStatus } from "@/app/admin/_components/save-bar";
import type {
  ProcessPillar,
  ProjectCard,
  SiteContent,
  Skill,
  SocialLink,
  Stat,
} from "@/lib/site-content";

export function HomepageEditor({
  initialContent,
}: {
  initialContent: SiteContent;
}) {
  const [content, setContent] = useState(initialContent);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<SaveStatus>({ type: "idle" });
  const router = useRouter();

  async function handleSave() {
    setPending(true);
    setStatus({ type: "idle" });
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!res.ok) throw new Error("Save failed");
      setStatus({ type: "success", message: "Saved — live on the site." });
      router.refresh();
    } catch {
      setStatus({ type: "error", message: "Couldn't save. Try again." });
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col gap-6 pb-24">
      <Section title="Hero" description="The top of the homepage.">
        <Field label="Eyebrow">
          <Input
            value={content.hero.eyebrow}
            onChange={(e) =>
              setContent((c) => ({ ...c, hero: { ...c.hero, eyebrow: e.target.value } }))
            }
          />
        </Field>
        <Field label="Headline">
          <Textarea
            value={content.hero.headline}
            onChange={(e) =>
              setContent((c) => ({ ...c, hero: { ...c.hero, headline: e.target.value } }))
            }
          />
        </Field>
        <Field label="Subtext">
          <Textarea
            value={content.hero.subtext}
            onChange={(e) =>
              setContent((c) => ({ ...c, hero: { ...c.hero, subtext: e.target.value } }))
            }
          />
        </Field>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Button label">
            <Input
              value={content.hero.ctaLabel}
              onChange={(e) =>
                setContent((c) => ({ ...c, hero: { ...c.hero, ctaLabel: e.target.value } }))
              }
            />
          </Field>
          <Field label="Button link">
            <Input
              value={content.hero.ctaHref}
              onChange={(e) =>
                setContent((c) => ({ ...c, hero: { ...c.hero, ctaHref: e.target.value } }))
              }
            />
          </Field>
        </div>
      </Section>

      <Section title="Stats strip" description="The four numbers under the hero.">
        <RepeatingFieldList<Stat>
          items={content.stats}
          onChange={(stats) => setContent((c) => ({ ...c, stats }))}
          newItem={() => ({ value: "", label: "" })}
          addLabel="Add stat"
          minItems={1}
          renderItem={(stat, _i, update) => (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Value">
                <Input value={stat.value} onChange={(e) => update({ value: e.target.value })} />
              </Field>
              <Field label="Label">
                <Input value={stat.label} onChange={(e) => update({ label: e.target.value })} />
              </Field>
            </div>
          )}
        />
      </Section>

      <Section title="Projects" description="Selected work cards on the homepage.">
        <RepeatingFieldList<ProjectCard>
          items={content.projects}
          onChange={(projects) => setContent((c) => ({ ...c, projects }))}
          newItem={() => ({
            slug: "",
            title: "",
            tag: "",
            description: "",
            image: "",
          })}
          addLabel="Add project"
          minItems={1}
          renderItem={(project, _i, update) => (
            <div className="flex flex-col gap-3">
              <ImageUploadField
                label="Card image"
                value={project.image}
                onChange={(image) => update({ image })}
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="Title">
                  <Input value={project.title} onChange={(e) => update({ title: e.target.value })} />
                </Field>
                <Field label="Tag">
                  <Input value={project.tag} onChange={(e) => update({ tag: e.target.value })} />
                </Field>
              </div>
              <Field label="Case study slug">
                <Input
                  value={project.slug}
                  onChange={(e) => update({ slug: e.target.value })}
                />
              </Field>
              <Field label="Description">
                <Textarea
                  value={project.description}
                  onChange={(e) => update({ description: e.target.value })}
                />
              </Field>
            </div>
          )}
        />
      </Section>

      <Section title="Technical capabilities" description="The skills grid on the homepage.">
        <RepeatingFieldList<Skill>
          items={content.skills}
          onChange={(skills) => setContent((c) => ({ ...c, skills }))}
          newItem={() => ({ title: "", description: "" })}
          addLabel="Add skill"
          minItems={1}
          renderItem={(skill, _i, update) => (
            <div className="flex flex-col gap-3">
              <Field label="Title">
                <Input value={skill.title} onChange={(e) => update({ title: e.target.value })} />
              </Field>
              <Field label="Description">
                <Textarea
                  value={skill.description}
                  onChange={(e) => update({ description: e.target.value })}
                />
              </Field>
            </div>
          )}
        />
      </Section>

      <Section title="About page" description="Bio and portrait on the About page.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Eyebrow">
            <Input
              value={content.aboutBio.eyebrow}
              onChange={(e) =>
                setContent((c) => ({ ...c, aboutBio: { ...c.aboutBio, eyebrow: e.target.value } }))
              }
            />
          </Field>
          <Field label="Heading">
            <Input
              value={content.aboutBio.heading}
              onChange={(e) =>
                setContent((c) => ({ ...c, aboutBio: { ...c.aboutBio, heading: e.target.value } }))
              }
            />
          </Field>
        </div>
        <Field label="Intro paragraph">
          <Textarea
            value={content.aboutBio.intro}
            onChange={(e) =>
              setContent((c) => ({ ...c, aboutBio: { ...c.aboutBio, intro: e.target.value } }))
            }
          />
        </Field>
        <Field label="Detail paragraph">
          <Textarea
            value={content.aboutBio.detail}
            onChange={(e) =>
              setContent((c) => ({ ...c, aboutBio: { ...c.aboutBio, detail: e.target.value } }))
            }
          />
        </Field>
        <ImageUploadField
          label="Portrait"
          value={content.aboutBio.portrait.image}
          onChange={(image) =>
            setContent((c) => ({
              ...c,
              aboutBio: { ...c.aboutBio, portrait: { ...c.aboutBio.portrait, image } },
            }))
          }
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Portrait name">
            <Input
              value={content.aboutBio.portrait.name}
              onChange={(e) =>
                setContent((c) => ({
                  ...c,
                  aboutBio: {
                    ...c.aboutBio,
                    portrait: { ...c.aboutBio.portrait, name: e.target.value },
                  },
                }))
              }
            />
          </Field>
          <Field label="Portrait caption">
            <Input
              value={content.aboutBio.portrait.caption}
              onChange={(e) =>
                setContent((c) => ({
                  ...c,
                  aboutBio: {
                    ...c.aboutBio,
                    portrait: { ...c.aboutBio.portrait, caption: e.target.value },
                  },
                }))
              }
            />
          </Field>
        </div>
      </Section>

      <Section title="Process pillars" description="The methodology grid on the About page.">
        <RepeatingFieldList<ProcessPillar>
          items={content.processPillars}
          onChange={(processPillars) => setContent((c) => ({ ...c, processPillars }))}
          newItem={() => ({ index: "", title: "", description: "" })}
          addLabel="Add pillar"
          minItems={1}
          renderItem={(pillar, _i, update) => (
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[100px_1fr]">
                <Field label="Index">
                  <Input value={pillar.index} onChange={(e) => update({ index: e.target.value })} />
                </Field>
                <Field label="Title">
                  <Input value={pillar.title} onChange={(e) => update({ title: e.target.value })} />
                </Field>
              </div>
              <Field label="Description">
                <Textarea
                  value={pillar.description}
                  onChange={(e) => update({ description: e.target.value })}
                />
              </Field>
            </div>
          )}
        />
      </Section>

      <Section title="Contact page" description="Contact hero, direct details, and socials.">
        <div className="flex flex-col gap-3">
          <Field label="Hero eyebrow">
            <Input
              value={content.contactHero.eyebrow}
              onChange={(e) =>
                setContent((c) => ({
                  ...c,
                  contactHero: { ...c.contactHero, eyebrow: e.target.value },
                }))
              }
            />
          </Field>
          <Field label="Hero heading">
            <Input
              value={content.contactHero.heading}
              onChange={(e) =>
                setContent((c) => ({
                  ...c,
                  contactHero: { ...c.contactHero, heading: e.target.value },
                }))
              }
            />
          </Field>
          <Field label="Hero description">
            <Textarea
              value={content.contactHero.description}
              onChange={(e) =>
                setContent((c) => ({
                  ...c,
                  contactHero: { ...c.contactHero, description: e.target.value },
                }))
              }
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label="Email">
            <Input
              value={content.contactEmail}
              onChange={(e) => setContent((c) => ({ ...c, contactEmail: e.target.value }))}
            />
          </Field>
          <Field label="Phone">
            <Input
              value={content.contactPhone}
              onChange={(e) => setContent((c) => ({ ...c, contactPhone: e.target.value }))}
            />
          </Field>
          <Field label="Location">
            <Input
              value={content.contactLocation}
              onChange={(e) => setContent((c) => ({ ...c, contactLocation: e.target.value }))}
            />
          </Field>
        </div>

        <Field label="Socials">
          <RepeatingFieldList<SocialLink>
            items={content.socials}
            onChange={(socials) => setContent((c) => ({ ...c, socials }))}
            newItem={() => ({ label: "", href: "" })}
            addLabel="Add social link"
            minItems={0}
            renderItem={(social, _i, update) => (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="Label">
                  <Input value={social.label} onChange={(e) => update({ label: e.target.value })} />
                </Field>
                <Field label="Link">
                  <Input value={social.href} onChange={(e) => update({ href: e.target.value })} />
                </Field>
              </div>
            )}
          />
        </Field>
      </Section>

      <Section title="Availability banner" description="The booking-status strip on the contact page.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Badge">
            <Input
              value={content.availability.badge}
              onChange={(e) =>
                setContent((c) => ({ ...c, availability: { ...c.availability, badge: e.target.value } }))
              }
            />
          </Field>
          <Field label="Note">
            <Input
              value={content.availability.note}
              onChange={(e) =>
                setContent((c) => ({ ...c, availability: { ...c.availability, note: e.target.value } }))
              }
            />
          </Field>
        </div>
        <Field label="Heading">
          <Input
            value={content.availability.heading}
            onChange={(e) =>
              setContent((c) => ({ ...c, availability: { ...c.availability, heading: e.target.value } }))
            }
          />
        </Field>
        <Field label="Description">
          <Textarea
            value={content.availability.description}
            onChange={(e) =>
              setContent((c) => ({
                ...c,
                availability: { ...c.availability, description: e.target.value },
              }))
            }
          />
        </Field>
      </Section>

      <SaveBar onSave={handleSave} pending={pending} status={status} />
    </div>
  );
}
