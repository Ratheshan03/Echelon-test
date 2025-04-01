"use client";

import { useQuery, gql } from "@apollo/client";

const GET_USD_COUNTRIES = gql`
  query {
    countries(filter: { currency: { eq: "USD" } }) {
      name
      code
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

const Countries = () => {
  const { loading, error, data } = useQuery(GET_USD_COUNTRIES);

  if (loading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-lg font-semibold mb-4 text-center">
        Countries using USD
      </h1>
      <ul className="space-y-4">
        {data.countries.map((country) => (
          <li key={country.code} className="border-b pb-4">
            <h2 className="text-md font-medium">{country.name}</h2>
            <p>
              <strong>Code:</strong> {country.code}
            </p>
            <p>
              <strong>Language:</strong>{" "}
              {country.languages.map((lang) => lang.name).join(", ")}
            </p>
            <p>
              <strong>Continent:</strong> {country.continent.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
