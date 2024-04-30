import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const QuantitySelect = ({ quantity, setQuantity }: QuantitySelectProps) => {
  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label
          htmlFor="quantity"
          className="text-base font-semibold text-cmneutral"
        >
          Quantity
        </Label>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setQuantity(quantity - 1);
            }}
            disabled={quantity < 1}
          >
            <Minus />
          </Button>
          <Input
            type="number"
            id="quantity"
            className="w-24"
            value={quantity}
            defaultValue={0}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value < 0 || isNaN(value)) {
                setQuantity(0);
              } else {
                setQuantity(value);
              }
            }}
            min={0}
          />
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelect;
