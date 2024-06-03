# Install the nba_api package if you haven't already
# !pip install nba_api
# Install pandas if you haven't already
# !pip install pandas

from nba_api.stats.endpoints import leaguedashplayerstats, commonteamroster
from nba_api.stats.static import teams
import pandas as pd
import time

# Fetch player stats for the current season
player_stats = leaguedashplayerstats.LeagueDashPlayerStats(season='2023-24')
player_stats_df = player_stats.get_data_frames()[0]
print(player_stats_df.head())
player_stats_df.to_csv('player_stats_full.csv', index=False)
player_stats_df.to_clipboard(index=False)

# Select necessary columns
stats_columns = ['PLAYER_ID','PLAYER_NAME','NICKNAME','TEAM_ABBREVIATION','PTS','REB','AST','STL','BLK','TOV','FG3_PCT','MIN','GP','AGE','PLUS_MINUS']
player_stats_df = player_stats_df[stats_columns]
print(player_stats_df.head())
player_stats_df.to_csv('player_stats.csv', index=False)
player_stats_df.to_clipboard(index=False)
