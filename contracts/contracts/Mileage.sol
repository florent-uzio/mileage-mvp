// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Ownable} from "./access/Ownable.sol";

contract Mileage is Ownable {
    constructor(address initialOwner) Ownable(initialOwner) {}

    // Struct representing trip information
    struct TripInformation {
        uint256 tripId;
        string startLocation;
        string endLocation;
        uint256 startTime;
        uint256 endTime;
        uint256 totalDistance;
        string travelDuration;
    }

    // Mapping to associate user addresses with an array of trip information
    mapping(address => TripInformation[]) public userTrips;

    // Counter for generating unique tripIds
    uint256 private tripIdCounter;

    // Event emitted when a new trip information is allocated
    event TripAllocated(
        address indexed user,
        uint256 tripId,
        string startLocation,
        string endLocation
    );

    // Event emitted when trip information is updated
    event TripUpdated(
        address indexed user,
        uint256 tripId,
        string startLocation,
        string endLocation
    );

    // Event emitted when trip information is retrieved
    event TripsRetrieved(address indexed user, uint256[] tripIds);

    // Event emitted when a trip information is deleted
    event TripDeleted(address indexed user, uint256 tripId);

    // Function to allocate trip information for a user
    function allocateTrip(
        address user,
        string memory startLocation,
        string memory endLocation,
        uint256 startTime,
        uint256 endTime,
        uint256 totalDistance,
        string memory travelDuration
    ) external onlyOwner {
        uint256 tripId = tripIdCounter++;
        TripInformation[] storage trips = userTrips[user];
        trips.push(
            TripInformation({
                tripId: tripId,
                startLocation: startLocation,
                endLocation: endLocation,
                startTime: startTime,
                endTime: endTime,
                totalDistance: totalDistance,
                travelDuration: travelDuration
            })
        );

        emit TripAllocated(user, tripId, startLocation, endLocation);
    }

    // Function to update trip information for a user
    function updateTrip(
        address user,
        uint256 tripId,
        string memory startLocation,
        string memory endLocation
    ) external onlyOwner {
        TripInformation[] storage trips = userTrips[user];
        uint256 index = findTripIndex(trips, tripId);
        require(index != type(uint256).max, "Trip not found");

        TripInformation storage trip = trips[index];
        trip.startLocation = startLocation;
        trip.endLocation = endLocation;

        emit TripUpdated(user, tripId, startLocation, endLocation);
    }

    // Function to delete a specific trip information for a user
    function deleteTrip(address user, uint256 tripId) external onlyOwner {
        TripInformation[] storage trips = userTrips[user];
        uint256 index = findTripIndex(trips, tripId);
        require(index != type(uint256).max, "Trip not found");

        trips[index] = trips[trips.length - 1];
        trips.pop();

        emit TripDeleted(user, tripId);
    }

    // Function to delete all trip information for a user
    function deleteAllTrips(address user) external onlyOwner {
        delete userTrips[user];

        emit TripDeleted(user, 0); // 0 can be used to indicate all trips deleted
    }

    // Function to get trip information for a user
    function getTripsForUser(address user) external returns (uint256[] memory) {
        TripInformation[] storage trips = userTrips[user];
        uint256[] memory tripIds = new uint256[](trips.length);

        for (uint256 i = 0; i < trips.length; i++) {
            tripIds[i] = trips[i].tripId;
        }

        emit TripsRetrieved(user, tripIds);
        return tripIds;
    }

    // Internal function to find the index of a trip in the array
    function findTripIndex(
        TripInformation[] storage trips,
        uint256 tripId
    ) internal view returns (uint256) {
        for (uint256 i = 0; i < trips.length; i++) {
            if (trips[i].tripId == tripId) {
                return i;
            }
        }
        return type(uint256).max; // Return a large number if not found
    }

    // Function to get all trip information for a user
    function getAllTripsForUser(
        address user
    ) external view returns (TripInformation[] memory) {
        return userTrips[user];
    }
}
