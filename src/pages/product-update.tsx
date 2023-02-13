import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FormProductUpdate from 'components/forms/form-product-update';

export default function ProductUpdate() {
  const [productId, setProductId] = useState<number>();
  const { id } = useParams();

  useEffect(() => {
    const idNumber = Number(id);

    if (Number.isInteger(idNumber)) {
      setProductId(idNumber);
    }
  }, []);

  return (
    <div style={{ display: 'flex', flex: 1 }} id="product-details">
      {productId !== undefined ? (
        <FormProductUpdate productId={productId} />
      ) : null}
    </div>
  );
}
