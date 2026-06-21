import {  useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import RequestConfig from "@/components/Request"
import ResponseViewer from "@/components/ResponseViewer"
import axios from "axios"
import { Loader2 } from "lucide-react"

type Row = {
  key: string
  value: string
}

export default function Home() {

  const [url,setUrl] = useState("")
  const [method,setMethod] = useState("GET")

  const [headers,setHeaders] = useState<Row[]>([])
  const [params,setParams] = useState<Row[]>([])
  const [auth,setAuth] = useState<Row[]>([])

  const [body,setBody] = useState<any>({})
  const [timeout,settimeout] = useState(10)

  const [results,setResults] = useState({})
  const [loading, setLoading] = useState(false)

  
  const rowsToObject = (rows: Row[]) => {
    return Object.fromEntries(
      rows
        .filter(r => r.key.trim() !== "")
        .map(r => [r.key, r.value])
    )
  }

  const handleSubmit = async () => {

    try {
        setLoading(true)
      const formattedHeaders = rowsToObject(headers)
      const formattedParams = rowsToObject(params)
      const formattedAuth = rowsToObject(auth)

      const response = await axios.post(
        "http://127.0.0.1:5001/api/request",
        {
          url: url,
          method: method,
          headers: formattedHeaders,
          params: formattedParams,
          auth: formattedAuth,
          body: body,
          timeout: timeout * 1000
        }
      )

      setResults(response.data)

    } catch (error:any) {

      if (error.response) {
        console.log("Error Response:", error.response.data)
      } else {
        console.log("Error:", error.message)
      }

    }finally{
      setLoading(false)
    }
  }

  return (
   <div className="space-y-6 p-6">
  <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-6 shadow-sm">
    <h1 className="mb-5 text-2xl font-semibold text-orange-900">
      API Test
    </h1>

    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        <Select onValueChange={(val) => setMethod(val)}>
          <SelectTrigger className="h-11 w-full rounded-xl border-orange-200 bg-white shadow-sm lg:w-[180px]">
            <SelectValue placeholder="METHOD" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="GET">GET</SelectItem>
              <SelectItem value="POST">POST</SelectItem>
              <SelectItem value="DELETE">DELETE</SelectItem>
              <SelectItem value="PUT">PUT</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          placeholder="Enter API URL"
          className="h-11 rounded-xl border-orange-200 bg-white text-base shadow-sm focus-visible:ring-orange-400"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm">
        <RequestConfig
          onBodyChange={setBody}
          onTimeoutChange={settimeout}
          onHeaderChange={setHeaders}
          onAuthChange={setAuth}
          onParamChange={setParams}
          isForLoadTest={false}
        />
      </div>

      <div className="flex justify-end">
        <Button
  onClick={handleSubmit}
  disabled={loading}
  className="rounded-xl bg-orange-500 px-6 text-white hover:bg-orange-600 flex items-center gap-2"
>
  {loading && (
    <Loader2 className="h-4 w-4 animate-spin" />
  )}

  {loading ? "Sending..." : "Send Request"}
</Button>
      </div>
    </div>
  </div>

  <div className="rounded-2xl border border-orange-100 bg-orange-50/30 p-4 shadow-sm">
    <ResponseViewer
      isForLoadTest={false}
      response={results}
    />
  </div>
</div>)
}
