import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table"

type ResponseViewerProps = {
  response: any
  isForLoadTest: boolean
}

export default function ResponseViewer({
  response,
  isForLoadTest,
}: ResponseViewerProps) {

  if (!response) return null



  if (isForLoadTest) {
    return (
      <Card className="mt-4 p-4">

        <Table>
          <TableCaption>Load Test Results</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Average Latency</TableHead>
              <TableHead>Minimum Latency</TableHead>
              <TableHead>Maximum Latency</TableHead>
              <TableHead>Success Rate</TableHead>
              <TableHead>Total Requests</TableHead>
              <TableHead>Error Rate</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>

              <TableCell>{response.avg_latency} ms</TableCell>

              <TableCell>{response.min_latency} ms</TableCell>

              <TableCell>{response.max_latency} ms</TableCell>

              <TableCell className="text-green-600 font-medium">
                {response.success_rate} %
              </TableCell>

              <TableCell>{response.total_requests}</TableCell>

              <TableCell className="text-red-500">
                {response.error_rate} %
              </TableCell>

            </TableRow>
          </TableBody>

        </Table>

      </Card>
    )
  }


  return (
    <Card className="mt-4 p-4">


      <div className="mb-4 flex gap-6 text-sm font-medium">

        <span>
          Status: {response.status_code}
        </span>

        <span>
          Latency: {response.latency_ms} ms
        </span>

        <span>
          Response Size: {response.response_size} bytes
        </span>

      </div>


      <Tabs defaultValue="body">

        <TabsList>
          <TabsTrigger value="body">Body</TabsTrigger>
          <TabsTrigger value="headers">Headers</TabsTrigger>
        </TabsList>



        <TabsContent value="body">

          <ScrollArea className="h-[300px] rounded-md border p-3">

            <pre className="text-sm whitespace-pre-wrap break-words">
              {JSON.stringify(response.body, null, 2)}
            </pre>

          </ScrollArea>

        </TabsContent>


       
        <TabsContent value="headers">

          <ScrollArea className="h-[300px] rounded-md border p-3">

            <pre className="text-sm whitespace-pre-wrap break-words">
              {JSON.stringify(response.headers, null, 2)}
            </pre>

          </ScrollArea>

        </TabsContent>

      </Tabs>

    </Card>
  )
}