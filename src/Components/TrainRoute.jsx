import React, { useContext } from 'react'
import { TableContainer,Table,Thead,Tr,Th,Tbody,Td } from '@chakra-ui/react'
import { MyTheme } from '../Context/ThemeContext'

const TrainRoute = () => {
    const theme= useContext(MyTheme);
  return (
    <TableContainer w='full'>
        <Table>
          <Thead>
            <Tr>
              <Th>List No.</Th>
              <Th>Station Name</Th>
              <Th>Arrival Time</Th>
              <Th>Departure</Th>
              <Th>Halt</Th>
              <Th>Day No.</Th>
              <Th>Distance</Th>
              <Th>Platform</Th>
            </Tr>
          </Thead>
          <Tbody>
            {theme?.data?.trainRoutes.map((e,i)=>(<Tr key={i+e.stationId}>
                <Td textAlign='center'>{i+1}</Td>
                <Td>{e.stationName}</Td>
                <Td>{i===0?'Start':e.arrivalTime.slice(0,5)}</Td>
                <Td>{i===data?.trainRoutes.length-1?'End':e.departureTime.slice(0,5)}</Td>
                <Td>{e.haltTime}</Td>
                <Td>{e.travellingDay}</Td>
                <Td>{e.distance} kms</Td>
                <Td>{e.platform}</Td>
            </Tr>))}
          </Tbody>
        </Table>
      </TableContainer>
  )
}

export default TrainRoute