"""Initial migration

Revision ID: a924485a36cf
Revises: 
Create Date: 2023-06-19 15:12:41.221693

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a924485a36cf'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('book_clubs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('club_name', sa.String(), nullable=False),
    sa.Column('location', sa.String(), nullable=False),
    sa.Column('genre', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('meeting_day', sa.String(), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('book_clubs')
    # ### end Alembic commands ###
