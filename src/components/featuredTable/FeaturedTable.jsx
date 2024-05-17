"use client";

import { flexRender, useReactTable } from "@tanstack/react-table";
import { Table } from "flowbite-react";

const FeaturedTable = () => {
  // header column
  const columns = [
    {
      header: "Serial Number",
      accessorkey: "idx",
      footer: "Serial Number",
    },
    {
      header: "Blog Title",
      accessorkey: "idx",
      footer: "Blog Title",
    },
    {
      header: "Blog Owner",
      accessorkey: "idx",
      footer: "Blog Owner",
    },
    {
      header: "Owner Profile",
      accessorkey: "idx",
      footer: "Owner Profile",
    },
  ];

  const table = useReactTable({ data, columns });
  return (
    <div className="overflow-x-auto mt-24 container mx-auto">
      <Table hoverable>
        <Table.Head className="text-lg md:text-xl">


{
    table.getHeaderGroups().map(headerGroup => (
     <tr key={headerGroup.idx}>
{
    headerGroup.headers.map(header => 

        <Table.HeadCell key={header.idx}>
          {
            flexRender(header.column.columnDef.)
          }
        </Table.HeadCell>

    )
}
     </tr>
    ))
}




          <Table.HeadCell>Serial Number</Table.HeadCell>
          <Table.HeadCell>Blog Title</Table.HeadCell>
          <Table.HeadCell>Blog Owner</Table.HeadCell>
          <Table.HeadCell>Owner Profile</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-base font-medium">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white ">
              1
            </Table.Cell>
            <Table.Cell>
              Digital Artistry: Unleashing Creative Potential
            </Table.Cell>
            <Table.Cell>hadiurahman139@gmail.com</Table.Cell>
            <Table.Cell>
              <div className="avata flex justify-center">
                <div className="w-16">
                  <img
                    className="rounded-full"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default FeaturedTable;
