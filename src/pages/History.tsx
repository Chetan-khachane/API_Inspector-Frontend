import React from "react"
import { useLocation } from "react-router-dom"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function History() {

  const location = useLocation()
  const history = location.state?.history

  if (!history) {
    return <div className="p-6">No history available</div>
  }

  return (
    <div className="p-6 space-y-10">


      <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-semibold mb-4">
          Load API Test Summary
        </h1>

        <div className="w-full overflow-x-auto">

          <Table className="min-w-[1200px]">

            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Total Request</TableHead>
                <TableHead>Concurrency</TableHead>
                <TableHead>Avg Latency</TableHead>
                <TableHead>Min Latency</TableHead>
                <TableHead>Max Latency</TableHead>
                <TableHead>Success Rate</TableHead>
                <TableHead>Error Rate</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>

              {history.load_test.map((item: any) => (
                <TableRow key={item.id}>

                  <TableCell>{item.id}</TableCell>

                  <TableCell
                    className="max-w-[350px] truncate"
                    title={item.url}
                  >
                    {item.url}
                  </TableCell>

                  <TableCell>{item.total_request}</TableCell>

                  <TableCell>{item.concurrency}</TableCell>

                  <TableCell>{item.avg_latency}</TableCell>

                  <TableCell>{item.min_latency}</TableCell>

                  <TableCell>{item.max_latency}</TableCell>

                  <TableCell className="text-green-600 font-medium">
                    {item.success_rate}
                  </TableCell>

                  <TableCell className="text-red-500">
                    {item.error_rate}
                  </TableCell>

                  <TableCell>{item.created_at}</TableCell>

                </TableRow>
              ))}

            </TableBody>

          </Table>

        </div>

      </div>




      <div className="bg-gray-100 rounded-xl p-6 shadow-sm">

        <h1 className="text-xl font-semibold mb-4">
          Simple API Test Summary
        </h1>

        <div className="w-full overflow-x-auto">

          <Table className="min-w-[1000px]">

            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status Code</TableHead>
                <TableHead>Latency</TableHead>
                <TableHead>Response Size</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>

              {history.simple_test.map((item: any) => (

                <TableRow key={item.id}>

                  <TableCell>{item.id}</TableCell>

                  <TableCell
                    className="max-w-[350px] truncate"
                    title={item.url}
                  >
                    {item.url}
                  </TableCell>

                  <TableCell>{item.method}</TableCell>

                  <TableCell
                    className={
                      item.status_code === 200
                        ? "text-green-600 font-medium"
                        : "text-red-500"
                    }
                  >
                    {item.status_code}
                  </TableCell>

                  <TableCell>{item.latency}</TableCell>

                  <TableCell>{item.response_size}</TableCell>

                  <TableCell>{item.created_at}</TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </div>

      </div>

    </div>
  )
}