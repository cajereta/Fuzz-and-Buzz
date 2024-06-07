import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const ShippingAddress = () => {
  return (
    <Card className="text-left">
      <CardHeader>
        <CardTitle>Shipping Details</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col gap-4 text-left">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input type="email" id="firstName" placeholder="John" />
            </div>
            <div className="flex-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input type="text" id="lastName" placeholder="Croztera" />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              placeholder="Type your address here"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="city">City</Label>
              <Input type="text" id="city" placeholder="New York City" />
            </div>
            <div className="flex-1">
              <Label htmlFor="state">State</Label>
              <Input type="text" id="state" placeholder="New York" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input type="number" id="zipCode" placeholder="10001" />
            </div>
            <div className="flex-1">
              <Label htmlFor="phone">Phone</Label>
              <Input type="number" id="phone" placeholder="561-555-7689" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
