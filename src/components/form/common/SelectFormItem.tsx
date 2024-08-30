import { Col, Form, FormItemProps, Select, SelectProps } from 'antd';
import { ArrowDownIcon } from 'src/components/icons';
import { baseFormItemCol } from 'src/constants/form';
import '../form_item.scss';

type CombinedType = FormItemProps & SelectProps;

export interface SelectFormItemProps extends CombinedType {
  col?: number;
  message?: string;
}

function SelectFormItem({
  col = baseFormItemCol,
  name,
  label,
  message,
  placeholder,
  disabled,
  onChange,
  options,
}: SelectFormItemProps) {
  return (
    <Col span={col}>
      <Form.Item
        name={name}
        label={label}
        rules={!!message ? [{ required: true, message }] : []}
      >
        <Select
          placeholder={placeholder}
          allowClear
          options={options}
          onChange={onChange}
          disabled={disabled}
          suffixIcon={<ArrowDownIcon />}
          className="form-item-select"
        />
      </Form.Item>
    </Col>
  );
}

export default SelectFormItem;
