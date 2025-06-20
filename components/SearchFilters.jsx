import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Spinner, Input, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import noresult from '../assets/images/noresult.jpg';
import { fetchApi, baseUrl } from '../utils/fetchApi';

import { filterData, getFilterValues } from '../utils/filterData';

import React from 'react'

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [locationData, setLocationData] = useState();
    const [showLocations, setShowLocations] = useState(false);
    const router = useRouter();

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);

        // basically updating the query parameters in the URL
        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value;
            }
        })

        router.push({ pathname: path, query: query })
    };

    // Handling the search term input

    useEffect(() => {
        if (searchTerm !== '') {
            const fetchData = async () => {
                setLoading(true);
                // Fetching the auto-complete data from the API

                const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
                setLoading(false);
                setLocationData(data?.hits);
            };

            fetchData();
        }
    }, [searchTerm]);
    
    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                        placeholder={filter.placeholder}
                        w="fit-content"
                        p="2"
                        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                    >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                        ))}

                    </Select>
                </Box>
            ))}

            <Flex flexDir="column">
                <Button
                    onClick={() => setShowLocations(!showLocations)}
                    border="1px"
                    borderColor="gray.200"
                    marginTop="2"
                >
                    Search by Location
                </Button>
                {showLocations && (
                    <Flex flexDir="column" pos="relative" paddingTop="2">
                        <Input
                            placeholder="Search interesting places"
                            value={searchTerm}
                            w="300px"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {setSearchTerm !== '' && (
                            <Icon
                                as={MdCancel}
                                pos="relative"
                                cursor="pointer"
                                right="5"
                                top="5"
                                zIndex="100"
                                onClick={() => setSearchTerm('')}
                            />
                        )}

                        {loading && <Spinner margin="auto" marginTop="3" />}

                        {showLocations && (
                            <Box height="300px" overflow="auto">
                                {locationData?.map((location) => (
                                    <Box
                                        key={location.id}
                                        onClick={() => {
                                            searchProperties({locationExternalIDs: location.externalID});
                                            setShowLocations(false);
                                            setSearchTerm(location.name);
                                        }}
                                    >
                                        <Text
                                            cursor="pointer"
                                            bg ="gray.200"
                                            p="2"
                                            borderBottom="1px"
                                            borderColor="gray.100"
                                            _hover={{ bg: 'gray.300' }}
                                        >
                                            {location.name}
                                        </Text>
                                    </Box>
                                ))}

                                {!loading && !locationData?.length && (
                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        flexDir="column"
                                        marginTop="5"
                                        marginBottom="5"
                                    >
                                        <Image src={noresult} alt="no result" height="200px" width="200px" />
                                        <Text fontSize="xl" marginTop="3">
                                            Waiting to search
                                        </Text>
                                    </Flex>
                                )}
                            </Box>
                        )}
                    </Flex>
                )}
            </Flex>
        </Flex>
    )
}

export default SearchFilters