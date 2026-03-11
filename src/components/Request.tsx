import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import KeyValueEditor from "@/components/KeyValueEditor"

type Row = {
  key: string
  value: string
}

type propConfig = {
  isForLoadTest: Boolean
  onBodyChange: React.Dispatch<React.SetStateAction<string>>
  onTimeoutChange: React.Dispatch<React.SetStateAction<number>>
  onHeaderChange: React.Dispatch<React.SetStateAction<Row[]>>
  onAuthChange: React.Dispatch<React.SetStateAction<Row[]>>
  onParamChange: React.Dispatch<React.SetStateAction<Row[]>>
  onConccurencyChange?:  React.Dispatch<React.SetStateAction<number>> 
  onTotalRequestChange? :  React.Dispatch<React.SetStateAction<number>> 
}

export default function RequestConfig({
  isForLoadTest,
  onBodyChange,
  onHeaderChange,
  onAuthChange,
  onParamChange,
  onTimeoutChange,
  onConccurencyChange,
  onTotalRequestChange
}: propConfig) {
  return (
    <Tabs defaultValue="headers">
      <TabsList>
        <TabsTrigger value="headers">Headers</TabsTrigger>
        <TabsTrigger value="params">Params</TabsTrigger>
        <TabsTrigger value="body">Body</TabsTrigger>
        <TabsTrigger value="auth">Auth</TabsTrigger>
        <TabsTrigger value="timeout">Timeout</TabsTrigger>
        {isForLoadTest ? (
          <>
            <TabsTrigger value="concurrency">Concurreny</TabsTrigger>
            <TabsTrigger value="total request">Total Requests</TabsTrigger>
          </>
        ) : (
          ""
        )}
      </TabsList>

      <TabsContent value="headers">
        <KeyValueEditor setOptionChange={onHeaderChange} label="Header" />
      </TabsContent>

      <TabsContent value="params">
        <KeyValueEditor setOptionChange={onParamChange} label="Param" />
      </TabsContent>

      <TabsContent value="body">
        <Textarea
          onChange={(e) => onBodyChange(e.target.value)}
          placeholder='{"name":"john"}'
          className="h-40"
        />
      </TabsContent>

      <TabsContent value="auth">
        <KeyValueEditor setOptionChange={onAuthChange} label="Auth" />
      </TabsContent>

      <TabsContent value="timeout">
        <Input
          onChange={(e) => onTimeoutChange(Number(e.target.value))}
          type="number"
          placeholder="Timeout seconds"
        />
      </TabsContent>
      {isForLoadTest ? (
        <>
          <TabsContent value="concurrency">
            <Input onChange={(e)=>onConccurencyChange?.(Number(e.target.value))}
             type="number" placeholder="Total concurrent API calls" />
          </TabsContent>
          <TabsContent value="total request">
            <Input onChange={(e)=>onTotalRequestChange?.(Number(e.target.value))} type="number" placeholder="Total API calls " />
          </TabsContent>
        </>
      ) : (
        ""
      )}
    </Tabs>
  )
}
