import React from 'react';
import moment from 'moment';
import { EventStatus } from '@/types/event';
import ProgressBar from '@/components/elements/ProgressBar';
import Button from '@/components/elements/Button';
import Checkbox from '@/components/elements/Checkbox';
import {
  CheckIcon,
  LoaderIcon,
  DateIcon,
  ClockIcon,
} from '@/components/elements/Svg/svg';
import {
  Amount,
  CardBackImage,
  CardImage,
  Container,
  Content,
  DateContainer,
  DateLabel,
  Description,
  Detail,
  Header,
  Name,
  NameContainer,
  StartedDateContainer,
  StartedDateLabel,
  StartedDateTimeLabel,
  StatusBadge,
  StatusBadgeLabel,
  ToolsContainer,
  TransactionAmountLabel,
  TransactionsContainer,
} from './styles';
import { ProgressBarContainer } from '@/components/elements/ProgressBar/styles';
import SpinIcon from '@/components/elements/SpinIcon';

interface IEventCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  amount: number;
  transactions_success: number;
  transactions_processing: number;
  transactions_failed: number;
  progress: number;
  status: EventStatus;
  started_at: number;
}

const EventCard: React.FC<IEventCardProps> = ({
  name,
  image,
  description,
  amount,
  transactions_success,
  transactions_processing,
  transactions_failed,
  progress,
  status,
  started_at,
}) => {
  return (
    <Container>
      <Content>
        <Detail>
          <Header>
            <StatusBadge status={status}>
              {status === EventStatus.done ? (
                <CheckIcon />
              ) : (
                <SpinIcon>
                  <LoaderIcon />
                </SpinIcon>
              )}
              <StatusBadgeLabel>Airdrop</StatusBadgeLabel>
            </StatusBadge>

            <DateContainer>
              <DateIcon />
              <DateLabel>
                {status === EventStatus.done ? "It's Raining" : 'Harvest'}
              </DateLabel>
            </DateContainer>

            <StartedDateContainer>
              <ClockIcon />
              <StartedDateLabel>
                Started &nbsp;&nbsp;
                <StartedDateTimeLabel>
                  {moment(started_at).format('YYYY-MM-DD h:mm:ss')}
                </StartedDateTimeLabel>
              </StartedDateLabel>
            </StartedDateContainer>
          </Header>

          <Description>{description}</Description>

          <NameContainer>
            <Name>{name}</Name>
            <Amount>x {amount}</Amount>
          </NameContainer>

          <TransactionsContainer>
            <span>Wallet Transactions:</span>
            <span>
              <TransactionAmountLabel>
                {transactions_success}
              </TransactionAmountLabel>{' '}
              Success
            </span>
            <span>
              <TransactionAmountLabel>
                {transactions_processing}
              </TransactionAmountLabel>{' '}
              Processing
            </span>
            <span>
              <TransactionAmountLabel>
                {transactions_failed}
              </TransactionAmountLabel>{' '}
              Failed
            </span>
          </TransactionsContainer>

          <ProgressBarContainer>
            <ProgressBar percent={progress} />
          </ProgressBarContainer>

          <ToolsContainer>
            <Button variant="solid" lablel="More Details" />
            {status === EventStatus.progress && (
              <>
                <Button variant="outline" lablel="Cancel" />
                <Checkbox checked={true} label="Receive report on email" />
              </>
            )}
          </ToolsContainer>
        </Detail>

        <CardImage
          src={`/images/${image}`}
          width={300}
          height={216}
          alt={image}
        />
      </Content>

      <CardBackImage
        src={`/images/${image}`}
        width={600}
        height={600}
        alt={`back-${image}`}
      />
    </Container>
  );
};

export default EventCard;
