import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Row = {
  key: string
  value: string
}

type KeyValueEditorProps = {
  label: string

  setOptionChange: any
}

export default function KeyValueEditor({
  label,
  setOptionChange,
}: KeyValueEditorProps) {
  const [rows, setRows] = useState<Row[]>([{ key: "", value: "" }])

  const addRow = () => {
    setRows((prev) => [...prev, { key: "", value: "" }])
  }

  const removeRow = (index: number) => {
    setRows((prev) => {
      const updated = prev.filter((_, i) => i !== index)

      setOptionChange(updated)

      return updated
    })
  }

  const updateRow = (index: number, field: keyof Row, value: string) => {
    setRows((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }

      setOptionChange(updated) // send updated rows

      return updated
    })
  }

  return (
    <div className="space-y-3">
      {rows.map((row, index) => (
        <div key={index} className="flex gap-2">
          <Input
            placeholder={`${label} Key`}
            value={row.key}
            onChange={(e) => {
              updateRow(index, "key", e.target.value)
            }}
          />

          <Input
            placeholder={`${label} Value`}
            value={row.value}
            onChange={(e) => {
              updateRow(index, "value", e.target.value)
            }}
          />

          <Button
            type="button"
            variant="destructive"
            onClick={() => removeRow(index)}
          >
            X
          </Button>
        </div>
      ))}

      <Button type="button" variant="outline" onClick={addRow}>
        + Add {label}
      </Button>
    </div>
  )
}
