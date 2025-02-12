import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

export default function DecoratorExamples() {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
    >
      <Typography
        startDecorator={
          <Box
            component="span"
            sx={{
              bgcolor: 'neutral.400',
              width: '0.5em',
              height: '0.5em',
              borderRadius: '50%',
            }}
          />
        }
      >
        Inactive
      </Typography>

      <Typography
        fontSize="xl4"
        lineHeight={1}
        startDecorator={
          <Typography fontSize="lg" textColor="text.secondary">
            $
          </Typography>
        }
        sx={{ alignItems: 'flex-start' }}
      >
        25
      </Typography>

      <Typography
        level="body-sm"
        startDecorator={<InfoOutlined />}
        sx={{ alignItems: 'flex-start', maxWidth: 240, wordBreak: 'break-all' }}
      >
        This example demonstrates multiple lines of the text.
      </Typography>

      <Typography
        variant="soft"
        color="danger"
        startDecorator="🚨"
        fontSize="sm"
        sx={{ '--Typography-gap': '0.5rem', p: 1 }}
      >
        Simple alert using only Typography.
      </Typography>

      <Typography
        color="success"
        startDecorator={
          <SvgIcon fontSize="md" color="inherit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </SvgIcon>
        }
      >
        +8.2%{' '}
        <Typography level="body-xs" sx={{ alignSelf: 'last baseline', ml: 1 }}>
          Since last month
        </Typography>
      </Typography>
    </Box>
  );
}
