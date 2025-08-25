import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 15,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },

  subHeading: {
    fontSize: 14,
    color: "#666666",
    marginTop: 2,
  },

  mainContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
  },

  // Left Side Styles - Reduced width
  leftContainer: {
    width: 85,
    backgroundColor: "#FFFFFF",
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0",
  },

  leftListContainer: {
    paddingVertical: 8,
  },

  leftListItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    alignItems: "center",
    position: "relative",
    minHeight: 70,
  },

  leftListItemSelected: {
    backgroundColor: "#F0F8FF",
  },

  leftItemContent: {
    alignItems: "center",
  },

  leftItemAmount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 2,
  },

  leftItemExtra: {
    fontSize: 11,
    fontWeight: "600",
    color: "#4CAF50",
    marginBottom: 3,
  },

  leftItemDistance: {
    fontSize: 10,
    color: "#666666",
  },

  selectionIndicator: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: "#2196F3",
  },

  // Right Side Styles - Adjusted for smaller height
  rightContainer: {
    flex: 1,
    padding: 12,
  },

  detailCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    maxHeight: height * 0.75, // Limit height to 75% of screen
  },

  distanceHeader: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
  },

  totalDistanceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  durationText: {
    fontSize: 12,
    color: "#E3F2FD",
    marginTop: 2,
  },

  cardContent: {
    flex: 1,
    padding: 14,
    paddingBottom: 8,
  },

  customerSection: {
    marginBottom: 15,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  customerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 3,
  },

  customerPhone: {
    fontSize: 13,
    color: "#666666",
    marginBottom: 4,
  },

  seatsInfo: {
    fontSize: 13,
    color: "#2196F3",
    fontWeight: "500",
  },

  earningsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
  },

  earningsRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  vehicleIcon: {
    fontSize: 16,
    marginRight: 6,
  },

  earningsText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
  },

  extraEarningsText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  onlineStatus: {
    fontSize: 12,
    color: "#666666",
    fontStyle: "italic",
  },

  routeContainer: {
    marginBottom: 15,
    paddingHorizontal: 6,
  },

  routeItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },

  pickupDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    marginTop: 3,
    marginRight: 10,
  },

  dropDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FF5722",
    marginTop: 3,
    marginRight: 10,
  },

  locationInfo: {
    flex: 1,
  },

  locationLabel: {
    fontSize: 11,
    color: "#666666",
    fontWeight: "500",
    marginBottom: 1,
  },

  addressText: {
    fontSize: 13,
    color: "#333333",
    fontWeight: "500",
  },

  priceBreakdown: {
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  priceTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 6,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    paddingHorizontal: 2,
  },

  priceLabel: {
    fontSize: 12,
    color: "#666666",
    flex: 1,
    flexWrap: "wrap",
  },

  priceValue: {
    fontSize: 12,
    color: "#333333",
    fontWeight: "500",
    minWidth: 60,
    textAlign: "right",
  },

  totalPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingHorizontal: 2,
  },

  totalPriceLabel: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333333",
  },

  totalPriceValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    paddingTop: 8,
  },

  rejectButton: {
    width: 50,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },

  rejectButtonText: {
    fontSize: 18,
    color: "#666666",
    fontWeight: "bold",
  },

  acceptButton: {
    flex: 1,
    height: 45,
    backgroundColor: "#FFC107",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  acceptButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
  },

  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyStateText: {
    fontSize: 14,
    color: "#666666",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    fontSize: 14,
    color: "#666666",
  },

  // Responsive design for smaller screens
  '@media (max-width: 600)': {
    leftContainer: {
      width: 70,
    },
    leftItemAmount: {
      fontSize: 12,
    },
    heading: {
      fontSize: 18,
    },
    detailCard: {
      maxHeight: height * 0.7,
    }
  },

  // Additional utility styles
  scrollContainer: {
    flexGrow: 1,
  },
});