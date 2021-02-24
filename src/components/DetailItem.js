import React from "react";

export const DetailItem = ({ detailItem }) => {
  const AddressCity =
    detailItem && detailItem.address ? detailItem.address.city : null;
  const AddressZip =
    detailItem && detailItem.address ? detailItem.address.zip : null;
  const AddressStreetAddress =
    detailItem && detailItem.address ? detailItem.address.streetAddress : null;
  const AddressState =
    detailItem && detailItem.address ? detailItem.address.state : null;
  return (
    <div>
      <div>
        <strong>FirstName: </strong>
        {detailItem.firstName}
      </div>
      <div>
        <strong>LastName: </strong>
        {detailItem.lastName}
      </div>
      <div>
        <strong>Email: </strong>
        {detailItem.email}
      </div>
      <div>
        <strong>Phone: </strong>
        {detailItem.phone}
      </div>
      <div>
        <strong>Description: </strong>
        {detailItem.description}
      </div>
      <div>
        <strong>Address: </strong>
        <div className="ml-10">
          <strong>StreetAddress: </strong>
          {AddressStreetAddress}
        </div>
        <div>
          <strong>City: </strong>
          {AddressCity}
        </div>
        <div>
          <strong>State: </strong>
          {AddressState}
        </div>
        <div>
          <strong>Zip: </strong>
          {AddressZip}
        </div>
      </div>
    </div>
  );
};
