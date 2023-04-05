import React from 'react';
import FeatureCard from '../FeatureCard';
import { events, overviews } from '@/constants/data';
import {
  NFTIcon,
  HolderIcon,
  AirdropIcon,
  TradeInIcon,
  SalesIcon,
} from '@/components/elements/Svg/svg';
import {
  BannerContainer,
  BannerContent,
  DashboardContainer,
  DashboardContent,
  EventsContainer,
  EventsContent,
  EventsHeader,
  OverviewContainer,
  OverviewContent,
  OverviewHeader,
} from './styles';
import EventCard from '../EventCard';
import OverviewCard from '../OverviewCard';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <BannerContainer>
        <BannerContent>
          <FeatureCard variant="green" icon={NFTIcon} label="NFT Management" />
          <FeatureCard
            variant="yellow"
            icon={HolderIcon}
            label="Find Holders"
          />
          <FeatureCard variant="sky" icon={AirdropIcon} label="Airdrop" />
          <FeatureCard variant="purple" icon={TradeInIcon} label="Trade-in" />
          <FeatureCard variant="pink" icon={SalesIcon} label="Sales" />
        </BannerContent>
      </BannerContainer>

      <DashboardContent>
        <EventsContainer>
          <EventsHeader>Events</EventsHeader>
          <EventsContent>
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </EventsContent>
        </EventsContainer>

        <OverviewContainer>
          <OverviewHeader>Overview</OverviewHeader>
          <OverviewContent>
            {overviews.map((overview, index) => (
              <OverviewCard key={index} {...overview} />
            ))}
          </OverviewContent>
        </OverviewContainer>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
