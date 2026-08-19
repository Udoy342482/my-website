"use client";

import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function RepeatingFieldList<T>({
  items,
  onChange,
  newItem,
  renderItem,
  addLabel = "Add item",
  minItems = 0,
}: {
  items: T[];
  onChange: (items: T[]) => void;
  newItem: () => T;
  renderItem: (
    item: T,
    index: number,
    update: (patch: Partial<T>) => void
  ) => React.ReactNode;
  addLabel?: string;
  minItems?: number;
}) {
  function update(index: number, patch: Partial<T>) {
    onChange(items.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  }

  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  function add() {
    onChange([...items, newItem()]);
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col gap-3 rounded-xl border border-border p-4"
        >
          {items.length > minItems ? (
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-destructive"
              aria-label="Remove item"
            >
              <Trash2 className="size-4" />
            </button>
          ) : null}
          {renderItem(item, index, (patch) => update(index, patch))}
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
  );
}
