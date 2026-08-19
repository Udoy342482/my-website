"use client";

import { Plus, Trash2 } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Field } from "@/app/admin/_components/form-fields";

export function StringListField({
  label,
  items,
  onChange,
  minItems = 0,
  addLabel = "Add paragraph",
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  minItems?: number;
  addLabel?: string;
}) {
  function update(index: number, value: string) {
    onChange(items.map((item, i) => (i === index ? value : item)));
  }
  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }
  function add() {
    onChange([...items, ""]);
  }

  return (
    <Field label={label}>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <Textarea
              value={item}
              onChange={(e) => update(index, e.target.value)}
              className="flex-1"
            />
            {items.length > minItems ? (
              <button
                type="button"
                onClick={() => remove(index)}
                className="mt-2 shrink-0 text-muted-foreground hover:text-destructive"
                aria-label="Remove paragraph"
              >
                <Trash2 className="size-4" />
              </button>
            ) : null}
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={add}
          className="w-fit font-mono"
        >
          <Plus className="size-3.5" />
          {addLabel}
        </Button>
      </div>
    </Field>
  );
}
