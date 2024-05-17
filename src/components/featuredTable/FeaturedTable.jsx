"use client";

import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "flowbite-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { RiArrowDropDownFill, RiArrowUpSFill } from "react-icons/ri";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const FeaturedTable = () => {
  const axiosSecure = useAxiosSecure();

  //   get data with tanstack query
  const getData = async () => {
    const { data } = await axiosSecure("/featuredBlogs");
    return data;
  };

  const { data = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["allBlogs"],
  });

  //   console.log(blogs);

  // header column
  const columns = [
    {
      header: "Serial Number",
      accessorFn: (row, index) => index + 1,
      id: "serialNumber",
      footer: "Serial Number",
    },
    {
      header: "Blog Title",
      accessorKey: "title",
      footer: "Blog Title",
    },
    {
      header: "Blog Owner",
      accessorKey: "bloggerEmail",
      footer: "Blog Owner",
    },
    {
      header: "Owner Profile",
      accessorKey: "bloggerProfile",
      cell: ({ row }) => (
        <div className="avatar w-14 md:w-16">
          <img
            src={row.original.bloggerProfile}
            alt="Blogger Profile"
            className="rounded-full"
          />
        </div>
      ),
      footer: "Owner Profile",
    },
  ];

  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <div className="overflow-x-auto mt-24 container mx-auto rounded-2xl">
      <Table hoverable>
        <thead className="bg-[#512B58] rounded-xl">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-6 py-3 font-bold text-white text-lg md:text-xl"
                  key={header.id}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                  {
                    { asc: <TiArrowSortedUp className="text-3xl" />, desc: <TiArrowSortedDown className="text-3xl" /> }[
                      header.column.getIsSorted() ?? null
                    ]
                  }
                </th>
              ))}
            </tr>
          ))}

          {/* <Table.HeadCell>Serial Number</Table.HeadCell>
          <Table.HeadCell>Blog Title</Table.HeadCell>
          <Table.HeadCell>Blog Owner</Table.HeadCell>
          <Table.HeadCell>Owner Profile</Table.HeadCell> */}
        </thead>
        <Table.Body className="divide-y text-base font-medium">
          {table.getRowModel().rows.map((row) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-[#79BAC1]"
              key={row.id}
              //   className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              {row.getVisibleCells().map((cell) => (
                <Table.Cell
                  key={cell.id}
                  className="whitespace-nowrap font-semibold text-gray-900 dark:text-white "
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}

          {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
          </Table.Row> */}
        </Table.Body>
      </Table>
    </div>
  );
};

export default FeaturedTable;
