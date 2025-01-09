import * as React from "react"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ApiTester() {
  const [headers, setHeaders] = React.useState([{ key: "json", value: "utf-8" }])

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r bg-background p-4">
        <div className="mb-4">
          <Button variant="outline" className="w-full">
            Create
          </Button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-accent">
            <span>/world</span>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-accent">
            <span>/weather/{"{id}"}</span>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-accent">
            <span>/</span>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* URL Bar */}
        <div className="mb-6 flex gap-2">
          <Select defaultValue="GET">
            <SelectTrigger className="w-[100px] bg-green-100">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GET">GET</SelectItem>
              <SelectItem value="POST">POST</SelectItem>
              <SelectItem value="PUT">PUT</SelectItem>
              <SelectItem value="DELETE">DELETE</SelectItem>
            </SelectContent>
          </Select>
          <Input className="flex-1" defaultValue="hello/" />
          <Button>Create</Button>
        </div>

        {/* Response Body */}
        <Card className="mb-6 p-4">
          <h2 className="mb-2 font-semibold">Response Body</h2>
          <Textarea className="min-h-[200px]" />
        </Card>

        {/* Header Options */}
        <Card className="p-4">
          <h2 className="mb-4 font-semibold">Header Options</h2>
          
          <div className="mb-4">
            <label className="mb-2 block text-sm">Code</label>
            <Input className="max-w-[200px]" />
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm">Content type</label>
              <Input defaultValue="json" />
            </div>
            <div>
              <label className="mb-2 block text-sm">charset</label>
              <Input defaultValue="utf-8" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">HTTP Headers</h3>
            {headers.map((header, index) => (
              <div key={index} className="flex gap-2">
                <Input defaultValue={header.key} />
                <Input defaultValue={header.value} />
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

