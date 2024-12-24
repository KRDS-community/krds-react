import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../packages/core/lib';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'clicked' },
    title: { control: 'text' },
    children: { control: 'text' },
    isOpen: { control: 'boolean' },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

interface ModalWrapperProps {
  title: string;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <button
        style={{
          border: '1px solid black',
          padding: '10px',
          borderRadius: '4px',
        }}
        onClick={() => setIsOpen(true)}
      >
        모달 열기
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        onConfirm={
          args.onConfirm
            ? () => {
                args.onConfirm();
                setIsOpen(false);
              }
            : undefined
        }
      />
    </div>
  );
};

export const Default = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: '모달 제목',
    children: (
      <p>
        모달 내용입니다. 여기에 원하는 컨텐츠를 넣을 수 있습니다. 모달
        내용입니다. 여기에 원하는 컨텐츠를 넣을 수 있습니다.모달 내용입니다.
        여기에 원하는 컨텐츠를 넣을 수 있습니다.모달 내용입니다. 여기에 원하는
        컨텐츠를 넣을 수 있습니다.모달 내용입니다. 여기에 원하는 컨텐츠를 넣을
        수 있습니다.모달 내용입니다. 여기에 원하는 컨텐츠를 넣을 수
        있습니다.모달 내용입니다. 여기에 원하는 컨텐츠를 넣을 수 있습니다.
      </p>
    ),
    showCancelButton: true,
    showCloseIcon: true,
    onConfirm: () => console.log('확인 함수'),
  },
};

export const NoCloseIcon = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    showCloseIcon: false,
  },
};

export const NoCancelButton = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    showCancelButton: false,
  },
};

export const ConfirmOnly = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    showCancelButton: false,
    showCloseIcon: false,
    closeOnOverlayClick: false,
  },
};

export const Medium = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    width: 'm',
  },
};

export const Large = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    width: 'l',
  },
};

export const CustomLabel = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    cancelLabel: '취소하기',
    confirmLabel: '확인하기',
  },
};

export const NoFooter = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    ...Default.args,
    onConfirm: undefined,
    showCancelButton: false,
  },
};
