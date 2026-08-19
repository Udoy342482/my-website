"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/app/admin/_components/section";
import { Field, FieldSelect } from "@/app/admin/_components/form-fields";
import { RepeatingFieldList } from "@/app/admin/_components/repeating-field-list";
import { ImageUploadField } from "@/app/admin/_components/image-upload-field";
import { StringListField } from "@/app/admin/_components/string-list-field";
import { SaveBar, type SaveStatus } from "@/app/admin/_components/save-bar";
import { personaIconOptions } from "@/lib/persona-icons";
import type {
  CaseStudy,
  CaseStudyMeta,
  FieldNote,
  Highlight,
  IssueCard,
  KeyDecisionCard,
  PersonaItem,
} from "@/lib/case-studies-defaults";

type BusinessDecisionRow = NonNullable<CaseStudy["businessDecision"]>["rows"][number];

function emptyResearch(): NonNullable<CaseStudy["research"]> {
  return { title: "", paragraphs: [""], notes: [], imageCaption: "", images: ["", ""] };
}
function emptyDesignChallenge(): NonNullable<CaseStudy["designChallenge"]> {
  return {
    title: "",
    description: "",
    options: [
      { label: "Option 1", title: "", description: "", badge: "" },
      { label: "Option 2", title: "", description: "", badge: "" },
    ],
    adopted: { badge: "", title: "", description: "" },
    comparisonCaptions: ["", ""],
    comparisonImages: ["", ""],
  };
}
function emptyKeyDecisions(): NonNullable<CaseStudy["keyDecisions"]> {
  return { title: "", description: "", decisions: [] };
}
function emptyEngineering(): NonNullable<CaseStudy["engineering"]> {
  return {
    title: "",
    description: "",
    theirCase: "",
    myCase: "",
    resolution: "",
    steps: ["", "", ""],
    stepImages: ["", "", ""],
  };
}
function emptyBusinessDecision(): NonNullable<CaseStudy["businessDecision"]> {
  return { title: "", description: "", columnLabels: ["", ""], rows: [] };
}
function emptyReflection(): NonNullable<CaseStudy["reflection"]> {
  return { title: "", paragraphs: ["", ""] };
}

function OptionalToggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: (value: boolean) => void;
}) {
  return (
    <label className="flex w-fit items-center gap-2 font-mono text-xs tracking-[0.5px] text-foreground uppercase">
      <input
        type="checkbox"
        checked={enabled}
        onChange={(e) => onToggle(e.target.checked)}
        className="size-3.5 accent-brand"
      />
      Include this section
    </label>
  );
}

const toneOptions = [
  { value: "", label: "None" },
  { value: "brand", label: "Brand (positive)" },
  { value: "destructive", label: "Destructive (negative)" },
];

export function CaseStudyEditor({
  initialCaseStudy,
}: {
  initialCaseStudy: CaseStudy;
}) {
  const [study, setStudy] = useState(initialCaseStudy);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<SaveStatus>({ type: "idle" });
  const router = useRouter();

  async function handleSave() {
    setPending(true);
    setStatus({ type: "idle" });
    try {
      const res = await fetch(`/api/admin/case-studies/${study.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(study),
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
      <Section title="Overview & meta" description="Title, tag, summary, and the meta grid.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Title">
            <Input value={study.title} onChange={(e) => setStudy((s) => ({ ...s, title: e.target.value }))} />
          </Field>
          <Field label="Tag">
            <Input value={study.tag} onChange={(e) => setStudy((s) => ({ ...s, tag: e.target.value }))} />
          </Field>
        </div>
        <Field label="Summary">
          <Textarea value={study.summary} onChange={(e) => setStudy((s) => ({ ...s, summary: e.target.value }))} />
        </Field>
        <Field label="Meta grid">
          <RepeatingFieldList<CaseStudyMeta>
            items={study.meta}
            onChange={(meta) => setStudy((s) => ({ ...s, meta }))}
            newItem={() => ({ label: "", value: "", sub: "" })}
            addLabel="Add meta row"
            minItems={1}
            renderItem={(row, _i, update) => (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Field label="Label">
                  <Input value={row.label} onChange={(e) => update({ label: e.target.value })} />
                </Field>
                <Field label="Value">
                  <Input value={row.value} onChange={(e) => update({ value: e.target.value })} />
                </Field>
                <Field label="Sub-text">
                  <Input value={row.sub} onChange={(e) => update({ sub: e.target.value })} />
                </Field>
              </div>
            )}
          />
        </Field>
      </Section>

      <Section title="Hero" description="The banner at the top of the case study.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Hero eyebrow (optional)">
            <Input
              value={study.heroEyebrow ?? ""}
              onChange={(e) => setStudy((s) => ({ ...s, heroEyebrow: e.target.value }))}
            />
          </Field>
          <Field label="Hero image caption">
            <Input
              value={study.heroImageCaption}
              onChange={(e) => setStudy((s) => ({ ...s, heroImageCaption: e.target.value }))}
            />
          </Field>
        </div>
        <ImageUploadField
          label="Hero image"
          value={study.heroImage ?? ""}
          onChange={(heroImage) => setStudy((s) => ({ ...s, heroImage }))}
        />
      </Section>

      <Section title="Overview section" description="'What [project] is'.">
        <Field label="Title">
          <Input
            value={study.overview.title}
            onChange={(e) => setStudy((s) => ({ ...s, overview: { ...s.overview, title: e.target.value } }))}
          />
        </Field>
        <StringListField
          label="Paragraphs"
          items={study.overview.paragraphs}
          minItems={1}
          onChange={(paragraphs) => setStudy((s) => ({ ...s, overview: { ...s.overview, paragraphs } }))}
        />
        <Field label="Highlights">
          <RepeatingFieldList<Highlight>
            items={study.overview.highlights}
            onChange={(highlights) => setStudy((s) => ({ ...s, overview: { ...s.overview, highlights } }))}
            newItem={() => ({ index: "", title: "", description: "" })}
            addLabel="Add highlight"
            minItems={0}
            renderItem={(h, _i, update) => (
              <div className="flex flex-col gap-3">
                <Field label="Index label">
                  <Input value={h.index} onChange={(e) => update({ index: e.target.value })} />
                </Field>
                <Field label="Description">
                  <Textarea value={h.description} onChange={(e) => update({ description: e.target.value })} />
                </Field>
              </div>
            )}
          />
        </Field>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Image caption">
            <Input
              value={study.overview.imageCaption}
              onChange={(e) => setStudy((s) => ({ ...s, overview: { ...s.overview, imageCaption: e.target.value } }))}
            />
          </Field>
          <ImageUploadField
            label="Image"
            value={study.overview.image ?? ""}
            onChange={(image) => setStudy((s) => ({ ...s, overview: { ...s.overview, image } }))}
          />
        </div>
      </Section>

      <Section title="Problem section">
        <Field label="Title">
          <Input
            value={study.problem.title}
            onChange={(e) => setStudy((s) => ({ ...s, problem: { ...s.problem, title: e.target.value } }))}
          />
        </Field>
        <StringListField
          label="Paragraphs"
          items={study.problem.paragraphs}
          minItems={1}
          onChange={(paragraphs) => setStudy((s) => ({ ...s, problem: { ...s.problem, paragraphs } }))}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Quote">
            <Textarea
              value={study.problem.quote}
              onChange={(e) => setStudy((s) => ({ ...s, problem: { ...s.problem, quote: e.target.value } }))}
            />
          </Field>
          <Field label="Quote attribution">
            <Input
              value={study.problem.quoteAttribution}
              onChange={(e) =>
                setStudy((s) => ({ ...s, problem: { ...s.problem, quoteAttribution: e.target.value } }))
              }
            />
          </Field>
        </div>
      </Section>

      <Section title="Research">
        <OptionalToggle
          enabled={!!study.research}
          onToggle={(enabled) =>
            setStudy((s) => ({ ...s, research: enabled ? emptyResearch() : undefined }))
          }
        />
        {study.research ? (
          <>
            <Field label="Title">
              <Input
                value={study.research.title}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, research: { ...s.research!, title: e.target.value } }))
                }
              />
            </Field>
            <StringListField
              label="Paragraphs"
              items={study.research.paragraphs}
              minItems={1}
              onChange={(paragraphs) =>
                setStudy((s) => ({ ...s, research: { ...s.research!, paragraphs } }))
              }
            />
            <Field label="Field notes">
              <RepeatingFieldList<FieldNote>
                items={study.research.notes}
                onChange={(notes) => setStudy((s) => ({ ...s, research: { ...s.research!, notes } }))}
                newItem={() => ({ label: "", quote: "", insight: "" })}
                addLabel="Add note"
                minItems={0}
                renderItem={(note, _i, update) => (
                  <div className="flex flex-col gap-3">
                    <Field label="Label">
                      <Input value={note.label} onChange={(e) => update({ label: e.target.value })} />
                    </Field>
                    <Field label="Quote">
                      <Textarea value={note.quote} onChange={(e) => update({ quote: e.target.value })} />
                    </Field>
                    <Field label="Insight">
                      <Input value={note.insight} onChange={(e) => update({ insight: e.target.value })} />
                    </Field>
                  </div>
                )}
              />
            </Field>
            <Field label="Image caption">
              <Input
                value={study.research.imageCaption}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, research: { ...s.research!, imageCaption: e.target.value } }))
                }
              />
            </Field>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[0, 1].map((i) => (
                <ImageUploadField
                  key={i}
                  label={`Image ${i + 1}`}
                  value={study.research?.images?.[i] ?? ""}
                  onChange={(url) =>
                    setStudy((s) => {
                      const images = [...(s.research?.images ?? ["", ""])] as [string, string];
                      images[i] = url;
                      return { ...s, research: { ...s.research!, images } };
                    })
                  }
                />
              ))}
            </div>
          </>
        ) : null}
      </Section>

      <Section title="Personas">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Eyebrow (optional)">
            <Input
              value={study.personas.eyebrow ?? ""}
              onChange={(e) => setStudy((s) => ({ ...s, personas: { ...s.personas, eyebrow: e.target.value } }))}
            />
          </Field>
          <Field label="Title">
            <Input
              value={study.personas.title}
              onChange={(e) => setStudy((s) => ({ ...s, personas: { ...s.personas, title: e.target.value } }))}
            />
          </Field>
        </div>
        <Field label="Description">
          <Textarea
            value={study.personas.description}
            onChange={(e) => setStudy((s) => ({ ...s, personas: { ...s.personas, description: e.target.value } }))}
          />
        </Field>
        <Field label="Persona cards">
          <RepeatingFieldList<PersonaItem>
            items={study.personas.items}
            onChange={(items) => setStudy((s) => ({ ...s, personas: { ...s.personas, items } }))}
            newItem={() => ({ icon: "Users", title: "", tag: "", description: "" })}
            addLabel="Add persona"
            minItems={1}
            renderItem={(persona, _i, update) => (
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <Field label="Icon">
                    <FieldSelect
                      value={persona.icon}
                      onChange={(icon) => update({ icon: icon as (typeof personaIconOptions)[number] })}
                      options={personaIconOptions.map((opt) => ({ value: opt, label: opt }))}
                    />
                  </Field>
                  <Field label="Title">
                    <Input value={persona.title} onChange={(e) => update({ title: e.target.value })} />
                  </Field>
                  <Field label="Tag">
                    <Input value={persona.tag} onChange={(e) => update({ tag: e.target.value })} />
                  </Field>
                </div>
                <Field label="Description">
                  <Textarea value={persona.description} onChange={(e) => update({ description: e.target.value })} />
                </Field>
              </div>
            )}
          />
        </Field>
      </Section>

      <Section title="Design challenge">
        <OptionalToggle
          enabled={!!study.designChallenge}
          onToggle={(enabled) =>
            setStudy((s) => ({ ...s, designChallenge: enabled ? emptyDesignChallenge() : undefined }))
          }
        />
        {study.designChallenge ? (
          <>
            <Field label="Title">
              <Input
                value={study.designChallenge.title}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, designChallenge: { ...s.designChallenge!, title: e.target.value } }))
                }
              />
            </Field>
            <Field label="Description">
              <Textarea
                value={study.designChallenge.description}
                onChange={(e) =>
                  setStudy((s) => ({
                    ...s,
                    designChallenge: { ...s.designChallenge!, description: e.target.value },
                  }))
                }
              />
            </Field>
            {([0, 1] as const).map((i) => {
              function updateOption(patch: Partial<NonNullable<CaseStudy["designChallenge"]>["options"][number]>) {
                setStudy((s) => {
                  const options = [...s.designChallenge!.options] as NonNullable<
                    typeof s.designChallenge
                  >["options"];
                  options[i] = { ...options[i], ...patch };
                  return { ...s, designChallenge: { ...s.designChallenge!, options } };
                });
              }
              const option = study.designChallenge!.options[i];
              return (
                <div key={i} className="flex flex-col gap-3 rounded-xl border border-border p-4">
                  <p className="font-mono text-xs tracking-[0.5px] text-muted-foreground uppercase">
                    Rejected option {i + 1}
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label="Label">
                      <Input value={option.label} onChange={(e) => updateOption({ label: e.target.value })} />
                    </Field>
                    <Field label="Badge">
                      <Input value={option.badge} onChange={(e) => updateOption({ badge: e.target.value })} />
                    </Field>
                  </div>
                  <Field label="Option title">
                    <Input value={option.title} onChange={(e) => updateOption({ title: e.target.value })} />
                  </Field>
                  <Field label="Option description">
                    <Textarea
                      value={option.description}
                      onChange={(e) => updateOption({ description: e.target.value })}
                    />
                  </Field>
                </div>
              );
            })}
            <div className="flex flex-col gap-3 rounded-xl border border-l-4 border-border border-l-brand p-4">
              <p className="font-mono text-xs tracking-[0.5px] text-muted-foreground uppercase">
                Adopted solution
              </p>
              <Field label="Badge">
                <Input
                  value={study.designChallenge.adopted.badge}
                  onChange={(e) =>
                    setStudy((s) => ({
                      ...s,
                      designChallenge: {
                        ...s.designChallenge!,
                        adopted: { ...s.designChallenge!.adopted, badge: e.target.value },
                      },
                    }))
                  }
                />
              </Field>
              <Field label="Title">
                <Input
                  value={study.designChallenge.adopted.title}
                  onChange={(e) =>
                    setStudy((s) => ({
                      ...s,
                      designChallenge: {
                        ...s.designChallenge!,
                        adopted: { ...s.designChallenge!.adopted, title: e.target.value },
                      },
                    }))
                  }
                />
              </Field>
              <Field label="Description">
                <Textarea
                  value={study.designChallenge.adopted.description}
                  onChange={(e) =>
                    setStudy((s) => ({
                      ...s,
                      designChallenge: {
                        ...s.designChallenge!,
                        adopted: { ...s.designChallenge!.adopted, description: e.target.value },
                      },
                    }))
                  }
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[0, 1].map((i) => (
                <div key={i} className="flex flex-col gap-3">
                  <Field label={`Comparison caption ${i + 1}`}>
                    <Input
                      value={study.designChallenge!.comparisonCaptions[i]}
                      onChange={(e) =>
                        setStudy((s) => {
                          const comparisonCaptions = [...s.designChallenge!.comparisonCaptions] as [
                            string,
                            string,
                          ];
                          comparisonCaptions[i] = e.target.value;
                          return { ...s, designChallenge: { ...s.designChallenge!, comparisonCaptions } };
                        })
                      }
                    />
                  </Field>
                  <ImageUploadField
                    label={`Comparison image ${i + 1}`}
                    value={study.designChallenge?.comparisonImages?.[i] ?? ""}
                    onChange={(url) =>
                      setStudy((s) => {
                        const comparisonImages = [
                          ...(s.designChallenge?.comparisonImages ?? ["", ""]),
                        ] as [string | undefined, string | undefined];
                        comparisonImages[i] = url;
                        return { ...s, designChallenge: { ...s.designChallenge!, comparisonImages } };
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </>
        ) : null}
      </Section>

      <Section title="Key decisions">
        <OptionalToggle
          enabled={!!study.keyDecisions}
          onToggle={(enabled) =>
            setStudy((s) => ({ ...s, keyDecisions: enabled ? emptyKeyDecisions() : undefined }))
          }
        />
        {study.keyDecisions ? (
          <>
            <Field label="Title">
              <Input
                value={study.keyDecisions.title}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, keyDecisions: { ...s.keyDecisions!, title: e.target.value } }))
                }
              />
            </Field>
            <Field label="Description">
              <Textarea
                value={study.keyDecisions.description}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, keyDecisions: { ...s.keyDecisions!, description: e.target.value } }))
                }
              />
            </Field>
            <Field label="Decisions">
              <RepeatingFieldList<KeyDecisionCard>
                items={study.keyDecisions.decisions}
                onChange={(decisions) =>
                  setStudy((s) => ({ ...s, keyDecisions: { ...s.keyDecisions!, decisions } }))
                }
                newItem={() => ({ badge: "", title: "", description: "" })}
                addLabel="Add decision"
                minItems={0}
                renderItem={(decision, _i, update) => (
                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <Field label="Number (optional)">
                        <Input
                          value={decision.number ?? ""}
                          onChange={(e) => update({ number: e.target.value })}
                        />
                      </Field>
                      <Field label="Badge">
                        <Input value={decision.badge} onChange={(e) => update({ badge: e.target.value })} />
                      </Field>
                      <label className="flex items-center gap-2 self-end pb-1.5 font-mono text-xs text-foreground uppercase">
                        <input
                          type="checkbox"
                          checked={!!decision.highlighted}
                          onChange={(e) => update({ highlighted: e.target.checked })}
                          className="size-3.5 accent-brand"
                        />
                        Highlighted
                      </label>
                    </div>
                    <Field label="Title">
                      <Input value={decision.title} onChange={(e) => update({ title: e.target.value })} />
                    </Field>
                    <Field label="Description">
                      <Textarea
                        value={decision.description}
                        onChange={(e) => update({ description: e.target.value })}
                      />
                    </Field>
                  </div>
                )}
              />
            </Field>
          </>
        ) : null}
      </Section>

      <Section title="Engineering pushback">
        <OptionalToggle
          enabled={!!study.engineering}
          onToggle={(enabled) =>
            setStudy((s) => ({ ...s, engineering: enabled ? emptyEngineering() : undefined }))
          }
        />
        {study.engineering ? (
          <>
            <Field label="Title">
              <Input
                value={study.engineering.title}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, engineering: { ...s.engineering!, title: e.target.value } }))
                }
              />
            </Field>
            <Field label="Description">
              <Textarea
                value={study.engineering.description}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, engineering: { ...s.engineering!, description: e.target.value } }))
                }
              />
            </Field>
            <Field label="Their case">
              <Textarea
                value={study.engineering.theirCase}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, engineering: { ...s.engineering!, theirCase: e.target.value } }))
                }
              />
            </Field>
            <Field label="My case">
              <Textarea
                value={study.engineering.myCase}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, engineering: { ...s.engineering!, myCase: e.target.value } }))
                }
              />
            </Field>
            <Field label="Resolution">
              <Textarea
                value={study.engineering.resolution}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, engineering: { ...s.engineering!, resolution: e.target.value } }))
                }
              />
            </Field>
            {[0, 1, 2].map((i) => (
              <div key={i} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label={`Step ${i + 1}`}>
                  <Textarea
                    value={study.engineering!.steps[i]}
                    onChange={(e) =>
                      setStudy((s) => {
                        const steps = [...s.engineering!.steps] as [string, string, string];
                        steps[i] = e.target.value;
                        return { ...s, engineering: { ...s.engineering!, steps } };
                      })
                    }
                  />
                </Field>
                <ImageUploadField
                  label={`Step ${i + 1} image (optional)`}
                  value={study.engineering?.stepImages?.[i] ?? ""}
                  onChange={(url) =>
                    setStudy((s) => {
                      const stepImages = [
                        ...(s.engineering?.stepImages ?? ["", "", ""]),
                      ] as [string, string, string];
                      stepImages[i] = url;
                      return { ...s, engineering: { ...s.engineering!, stepImages } };
                    })
                  }
                />
              </div>
            ))}
          </>
        ) : null}
      </Section>

      <Section title="Business decision">
        <OptionalToggle
          enabled={!!study.businessDecision}
          onToggle={(enabled) =>
            setStudy((s) => ({ ...s, businessDecision: enabled ? emptyBusinessDecision() : undefined }))
          }
        />
        {study.businessDecision ? (
          <>
            <Field label="Title">
              <Input
                value={study.businessDecision.title}
                onChange={(e) =>
                  setStudy((s) => ({
                    ...s,
                    businessDecision: { ...s.businessDecision!, title: e.target.value },
                  }))
                }
              />
            </Field>
            <Field label="Description">
              <Textarea
                value={study.businessDecision.description}
                onChange={(e) =>
                  setStudy((s) => ({
                    ...s,
                    businessDecision: { ...s.businessDecision!, description: e.target.value },
                  }))
                }
              />
            </Field>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[0, 1].map((i) => (
                <Field key={i} label={`Column ${i + 1} label`}>
                  <Input
                    value={study.businessDecision!.columnLabels[i]}
                    onChange={(e) =>
                      setStudy((s) => {
                        const columnLabels = [...s.businessDecision!.columnLabels] as [string, string];
                        columnLabels[i] = e.target.value;
                        return { ...s, businessDecision: { ...s.businessDecision!, columnLabels } };
                      })
                    }
                  />
                </Field>
              ))}
            </div>
            <Field label="Rows">
              <RepeatingFieldList<BusinessDecisionRow>
                items={study.businessDecision.rows}
                onChange={(rows) =>
                  setStudy((s) => ({ ...s, businessDecision: { ...s.businessDecision!, rows } }))
                }
                newItem={() => ({ stage: "", a: "", b: "" })}
                addLabel="Add row"
                minItems={0}
                renderItem={(row, _i, update) => (
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <Field label="Stage">
                      <Input value={row.stage} onChange={(e) => update({ stage: e.target.value })} />
                    </Field>
                    <Field label="Column A">
                      <Input value={row.a} onChange={(e) => update({ a: e.target.value })} />
                    </Field>
                    <Field label="Column B">
                      <Input value={row.b} onChange={(e) => update({ b: e.target.value })} />
                    </Field>
                  </div>
                )}
              />
            </Field>
          </>
        ) : null}
      </Section>

      <Section title="Outcome">
        <Field label="Title">
          <Input
            value={study.outcome.title}
            onChange={(e) => setStudy((s) => ({ ...s, outcome: { ...s.outcome, title: e.target.value } }))}
          />
        </Field>
        <Field label="Description">
          <Textarea
            value={study.outcome.description}
            onChange={(e) => setStudy((s) => ({ ...s, outcome: { ...s.outcome, description: e.target.value } }))}
          />
        </Field>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-3 rounded-xl border border-border p-4">
            <p className="font-mono text-xs tracking-[0.5px] text-muted-foreground uppercase">
              Metric {i + 1}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Field label="Value">
                <Input
                  value={study.outcome.metrics[i].value}
                  onChange={(e) =>
                    setStudy((s) => {
                      const metrics = [...s.outcome.metrics] as typeof s.outcome.metrics;
                      metrics[i] = { ...metrics[i], value: e.target.value };
                      return { ...s, outcome: { ...s.outcome, metrics } };
                    })
                  }
                />
              </Field>
              <Field label="Label">
                <Input
                  value={study.outcome.metrics[i].label}
                  onChange={(e) =>
                    setStudy((s) => {
                      const metrics = [...s.outcome.metrics] as typeof s.outcome.metrics;
                      metrics[i] = { ...metrics[i], label: e.target.value };
                      return { ...s, outcome: { ...s.outcome, metrics } };
                    })
                  }
                />
              </Field>
              <Field label="Tone">
                <FieldSelect
                  value={study.outcome.metrics[i].tone ?? ""}
                  onChange={(tone) =>
                    setStudy((s) => {
                      const metrics = [...s.outcome.metrics] as typeof s.outcome.metrics;
                      metrics[i] = {
                        ...metrics[i],
                        tone: tone === "" ? undefined : (tone as "brand" | "destructive"),
                      };
                      return { ...s, outcome: { ...s.outcome, metrics } };
                    })
                  }
                  options={toneOptions}
                />
              </Field>
            </div>
            <Field label="Description">
              <Textarea
                value={study.outcome.metrics[i].description}
                onChange={(e) =>
                  setStudy((s) => {
                    const metrics = [...s.outcome.metrics] as typeof s.outcome.metrics;
                    metrics[i] = { ...metrics[i], description: e.target.value };
                    return { ...s, outcome: { ...s.outcome, metrics } };
                  })
                }
              />
            </Field>
          </div>
        ))}
      </Section>

      <Section title="Open problems">
        <Field label="Title">
          <Input
            value={study.openProblems.title}
            onChange={(e) =>
              setStudy((s) => ({ ...s, openProblems: { ...s.openProblems, title: e.target.value } }))
            }
          />
        </Field>
        <Field label="Description">
          <Textarea
            value={study.openProblems.description}
            onChange={(e) =>
              setStudy((s) => ({ ...s, openProblems: { ...s.openProblems, description: e.target.value } }))
            }
          />
        </Field>
        <Field label="Issues">
          <RepeatingFieldList<IssueCard>
            items={study.openProblems.issues}
            onChange={(issues) => setStudy((s) => ({ ...s, openProblems: { ...s.openProblems, issues } }))}
            newItem={() => ({ title: "", description: "" })}
            addLabel="Add issue"
            minItems={0}
            renderItem={(issue, _i, update) => (
              <div className="flex flex-col gap-3">
                <Field label="Title">
                  <Input value={issue.title} onChange={(e) => update({ title: e.target.value })} />
                </Field>
                <Field label="Description">
                  <Textarea value={issue.description} onChange={(e) => update({ description: e.target.value })} />
                </Field>
              </div>
            )}
          />
        </Field>
      </Section>

      <Section title="Reflection">
        <OptionalToggle
          enabled={!!study.reflection}
          onToggle={(enabled) =>
            setStudy((s) => ({ ...s, reflection: enabled ? emptyReflection() : undefined }))
          }
        />
        {study.reflection ? (
          <>
            <Field label="Title">
              <Input
                value={study.reflection.title}
                onChange={(e) =>
                  setStudy((s) => ({ ...s, reflection: { ...s.reflection!, title: e.target.value } }))
                }
              />
            </Field>
            {[0, 1].map((i) => (
              <Field key={i} label={`Paragraph ${i + 1}`}>
                <Textarea
                  value={study.reflection!.paragraphs[i]}
                  onChange={(e) =>
                    setStudy((s) => {
                      const paragraphs = [...s.reflection!.paragraphs] as [string, string];
                      paragraphs[i] = e.target.value;
                      return { ...s, reflection: { ...s.reflection!, paragraphs } };
                    })
                  }
                />
              </Field>
            ))}
          </>
        ) : null}
      </Section>

      <SaveBar onSave={handleSave} pending={pending} status={status} />
    </div>
  );
}
